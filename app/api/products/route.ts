import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentUser } from '@/lib/auth';

// GET - Listar produtos
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');
    const skip = (page - 1) * limit;

    // Construir filtros
    const where: any = {
      isActive: true,
    };

    if (category && category !== 'Todos') {
      where.category = category;
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }

    // Buscar produtos
    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          reviews: {
            include: {
              user: {
                select: { name: true, avatar: true }
              }
            }
          }
        }
      }),
      prisma.product.count({ where })
    ]);

    // Calcular rating médio para cada produto
    const productsWithRating = products.map((product: any) => {
      const avgRating = product.reviews.length > 0
        ? product.reviews.reduce((acc: number, review: any) => acc + review.rating, 0) / product.reviews.length
        : 0;

      return {
        ...product,
        rating: Math.round(avgRating * 10) / 10,
        reviewsCount: product.reviews.length
      };
    });

    return NextResponse.json({
      products: productsWithRating,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

// POST - Criar produto (apenas admin)
export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);
    
    if (!user) {
      return NextResponse.json(
        { error: 'Não autorizado' },
        { status: 401 }
      );
    }

    // Verificar se é admin (implementar verificação de role)
    const userData = await prisma.user.findUnique({
      where: { id: user.userId }
    });

    if (userData?.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Acesso negado' },
        { status: 403 }
      );
    }

    const { name, description, price, originalPrice, category, image, images, stock, features } = await request.json();

    // Validações
    if (!name || !description || !price || !category || !image) {
      return NextResponse.json(
        { error: 'Campos obrigatórios não preenchidos' },
        { status: 400 }
      );
    }

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        originalPrice: originalPrice ? parseFloat(originalPrice) : null,
        category,
        image,
        images: images || [],
        stock: parseInt(stock) || 0,
        features: features || [],
      }
    });

    return NextResponse.json({
      product,
      message: 'Produto criado com sucesso'
    });

  } catch (error) {
    console.error('Erro ao criar produto:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
} 