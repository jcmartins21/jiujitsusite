import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...');

  // Criar usuário admin
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@gamafigth.com.br' },
    update: {},
    create: {
      email: 'admin@gamafigth.com.br',
      name: 'Administrador',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });

  console.log('✅ Usuário admin criado:', admin.email);

  // Criar filiais
  const branches = await Promise.all([
    prisma.branch.upsert({
      where: { id: 'branch-centro' },
      update: {},
      create: {
        id: 'branch-centro',
        name: "Gama Figth - Centro",
        address: "Rua das Flores, 123 - Centro",
        city: "São Paulo, SP",
        phone: "(11) 99999-9999",
        whatsapp: "(11) 99999-9999",
        email: "centro@gamafigth.com.br",
        hours: "Segunda a Sexta: 6h às 22h | Sábado: 8h às 18h",
        features: ["Estacionamento", "Vestiários", "Ar Condicionado", "Wi-Fi"],
        description: "Nossa unidade principal, localizada no coração da cidade. Estrutura completa com tatames profissionais e equipamentos de última geração.",
        coordinates: "https://maps.google.com/?q=Rua+das+Flores+123+São+Paulo"
      },
    }),
    prisma.branch.upsert({
      where: { id: 'branch-zona-sul' },
      update: {},
      create: {
        id: 'branch-zona-sul',
        name: "Gama Figth - Zona Sul",
        address: "Av. Paulista, 1000 - Bela Vista",
        city: "São Paulo, SP",
        phone: "(11) 88888-8888",
        whatsapp: "(11) 88888-8888",
        email: "zonasul@gamafigth.com.br",
        hours: "Segunda a Sexta: 7h às 21h | Sábado: 9h às 17h",
        features: ["Estacionamento", "Vestiários", "Academia", "Loja"],
        description: "Unidade moderna com foco em competição e preparação física. Ideal para atletas que buscam alto rendimento.",
        coordinates: "https://maps.google.com/?q=Av+Paulista+1000+São+Paulo"
      },
    }),
    prisma.branch.upsert({
      where: { id: 'branch-zona-norte' },
      update: {},
      create: {
        id: 'branch-zona-norte',
        name: "Gama Figth - Zona Norte",
        address: "Rua Augusta, 500 - Santana",
        city: "São Paulo, SP",
        phone: "(11) 77777-7777",
        whatsapp: "(11) 77777-7777",
        email: "zonanorte@gamafigth.com.br",
        hours: "Segunda a Sexta: 6h às 23h | Sábado: 8h às 20h",
        features: ["Estacionamento", "Vestiários", "Sala de Aula", "Área Kids"],
        description: "Unidade familiar com programas especiais para crianças e iniciantes. Ambiente acolhedor e professores especializados.",
        coordinates: "https://maps.google.com/?q=Rua+Augusta+500+São+Paulo"
      },
    }),
  ]);

  console.log('✅ Filiais criadas:', branches.length);

  // Criar produtos
  const products = await Promise.all([
    prisma.product.upsert({
      where: { id: 'kimono-premium' },
      update: {},
      create: {
        id: 'kimono-premium',
        name: "Kimono Premium Gama Figth",
        description: "Kimono de alta qualidade para competição e treino. Tecido resistente e confortável.",
        price: 299.90,
        originalPrice: 399.90,
        category: "Kimonos",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        images: [
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        stock: 50,
        features: ["Tecido resistente", "Confortável", "Ideal para competição", "Múltiplos tamanhos"]
      },
    }),
    prisma.product.upsert({
      where: { id: 'rashguard-basic' },
      update: {},
      create: {
        id: 'rashguard-basic',
        name: "Rashguard Básico",
        description: "Rashguard confortável para treinos. Tecido respirável e secagem rápida.",
        price: 89.90,
        originalPrice: 119.90,
        category: "Rashguards",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        images: [
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        stock: 30,
        features: ["Tecido respirável", "Secagem rápida", "Confortável", "Múltiplas cores"]
      },
    }),
    prisma.product.upsert({
      where: { id: 'faixa-branca' },
      update: {},
      create: {
        id: 'faixa-branca',
        name: "Faixa Branca Oficial",
        description: "Faixa branca oficial da IBJJF. Qualidade premium para graduação.",
        price: 29.90,
        category: "Faixas",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        images: [
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        stock: 100,
        features: ["Oficial IBJJF", "Qualidade premium", "Múltiplos tamanhos", "Durabilidade"]
      },
    }),
  ]);

  console.log('✅ Produtos criados:', products.length);

  // Criar posts
  const posts = await Promise.all([
    prisma.post.upsert({
      where: { id: 'post-1' },
      update: {},
      create: {
        id: 'post-1',
        title: "Técnicas Fundamentais de Jiu Jitsu",
        content: "O Jiu Jitsu é uma arte marcial que se baseia em técnicas de alavancas e estrangulamentos. Neste post, vamos abordar as técnicas fundamentais que todo praticante deve conhecer...",
        excerpt: "Aprenda as técnicas fundamentais do Jiu Jitsu e melhore seu jogo.",
        authorId: admin.id,
        isPublished: true,
        publishedAt: new Date(),
      },
    }),
    prisma.post.upsert({
      where: { id: 'post-2' },
      update: {},
      create: {
        id: 'post-2',
        title: "Preparação Física para Competição",
        content: "A preparação física é essencial para qualquer atleta que queira competir no Jiu Jitsu. Vamos falar sobre treinos específicos, alimentação e recuperação...",
        excerpt: "Dicas essenciais para se preparar fisicamente para competições.",
        authorId: admin.id,
        isPublished: true,
        publishedAt: new Date(),
      },
    }),
  ]);

  console.log('✅ Posts criados:', posts.length);

  // Criar galeria
  const gallery = await Promise.all([
    prisma.gallery.upsert({
      where: { id: 'gallery-1' },
      update: {},
      create: {
        id: 'gallery-1',
        title: "Treino de Competição",
        description: "Equipe treinando para campeonato",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Treinos"
      },
    }),
    prisma.gallery.upsert({
      where: { id: 'gallery-2' },
      update: {},
      create: {
        id: 'gallery-2',
        title: "Graduação 2024",
        description: "Cerimônia de graduação dos alunos",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Eventos"
      },
    }),
  ]);

  console.log('✅ Galeria criada:', gallery.length);

  // Criar usuários de teste para cada papel
  const grameStre = await prisma.user.upsert({
    where: { email: 'gramestre@gamafigth.com.br' },
    update: {},
    create: {
      email: 'gramestre@gamafigth.com.br',
      name: 'Grã Mestre',
      password: await bcrypt.hash('gramestre123', 10),
      role: 'GRAMESTRE',
    },
  });
  const mestre = await prisma.user.upsert({
    where: { email: 'mestre@gamafigth.com.br' },
    update: {},
    create: {
      email: 'mestre@gamafigth.com.br',
      name: 'Mestre',
      password: await bcrypt.hash('mestre123', 10),
      role: 'MESTRE',
    },
  });
  const aluno = await prisma.user.upsert({
    where: { email: 'aluno@gamafigth.com.br' },
    update: {},
    create: {
      email: 'aluno@gamafigth.com.br',
      name: 'Aluno',
      password: await bcrypt.hash('aluno123', 10),
      role: 'ALUNO',
    },
  });
  console.log('✅ Usuários de teste criados:', grameStre.email, mestre.email, aluno.email);

  console.log('🎉 Seed concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error('❌ Erro durante o seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 