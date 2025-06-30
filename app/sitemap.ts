import { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.SITE_URL || 'https://gamafigth.com.br'

  // Páginas estáticas
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/branches`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/store`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  try {
    // Buscar produtos ativos
    const products = await prisma.product.findMany({
      where: { isActive: true },
      select: { id: true, updatedAt: true },
    })

    const productPages = products.map((product: { id: string, updatedAt: Date }) => ({
      url: `${baseUrl}/store/product/${product.id}`,
      lastModified: product.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))

    // Buscar posts publicados
    const posts = await prisma.post.findMany({
      where: { isPublished: true },
      select: { id: true, publishedAt: true },
    })

    const postPages = posts.map((post: { id: string, publishedAt: Date | null }) => ({
      url: `${baseUrl}/blog/post/${post.id}`,
      lastModified: post.publishedAt || new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

    // Buscar filiais ativas
    const branches = await prisma.branch.findMany({
      where: { isActive: true },
      select: { id: true, updatedAt: true },
    })

    const branchPages = branches.map((branch: { id: string, updatedAt: Date }) => ({
      url: `${baseUrl}/branches/${branch.id}`,
      lastModified: branch.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

    return [...staticPages, ...productPages, ...postPages, ...branchPages]
  } catch (error) {
    console.error('Erro ao gerar sitemap:', error)
    return staticPages
  }
} 