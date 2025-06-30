import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentUser } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);
    
    if (!user) {
      return NextResponse.json(
        { error: 'Não autorizado' },
        { status: 401 }
      );
    }

    // Verificar se é admin
    const userData = await prisma.user.findUnique({
      where: { id: user.userId }
    });

    if (userData?.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Acesso negado' },
        { status: 403 }
      );
    }

    // Buscar estatísticas
    const [
      totalProducts,
      totalUsers,
      totalOrders,
      totalPosts,
      totalGallery,
      revenue
    ] = await Promise.all([
      prisma.product.count({ where: { isActive: true } }),
      prisma.user.count(),
      prisma.order.count(),
      prisma.post.count({ where: { isPublished: true } }),
      prisma.gallery.count({ where: { isActive: true } }),
      prisma.order.aggregate({
        where: { paymentStatus: 'PAID' },
        _sum: { total: true }
      })
    ]);

    return NextResponse.json({
      totalProducts,
      totalUsers,
      totalOrders,
      totalPosts,
      totalGallery,
      revenue: revenue._sum.total || 0
    });

  } catch (error) {
    console.error('Erro ao buscar estatísticas:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
} 