# Gama Figth - Site da Equipe de Jiu Jitsu

Site completo para equipe de Jiu Jitsu com sistema de e-commerce, blog, galeria, painel administrativo e mais.

## 🚀 Funcionalidades

### Frontend
- **Design Responsivo**: Interface moderna com Material-UI
- **Internacionalização**: Suporte a Português, Inglês e Espanhol
- **Páginas Principais**: Home, Sobre, Filiais, Loja, Galeria, Blog, Contato
- **Sistema de Autenticação**: Login/Registro com JWT
- **E-commerce**: Catálogo de produtos, carrinho e checkout com Stripe
- **Blog**: Sistema de posts com comentários
- **Galeria**: Upload e exibição de fotos
- **Formulário de Contato**: Integrado com banco de dados

### Backend
- **API REST**: Endpoints para todas as funcionalidades
- **Banco de Dados**: PostgreSQL com Prisma ORM
- **Autenticação**: JWT com bcrypt para senhas
- **Upload de Imagens**: Cloudinary para armazenamento
- **Pagamentos**: Integração completa com Stripe
- **Webhooks**: Processamento automático de pagamentos

### Painel Administrativo
- **Dashboard**: Estatísticas e visão geral
- **Gestão de Produtos**: CRUD completo
- **Gestão de Posts**: Editor de blog
- **Gestão de Galeria**: Upload múltiplo de imagens
- **Gestão de Usuários**: Controle de acesso
- **Gestão de Pedidos**: Acompanhamento de vendas
- **Upload de Imagens**: Interface drag & drop

### SEO e Performance
- **Sitemap Dinâmico**: Geração automática com next-sitemap
- **Meta Tags Dinâmicas**: Otimização para motores de busca
- **Robots.txt**: Configuração automática
- **Performance**: Otimizações de imagem e carregamento

### Testes
- **Jest**: Framework de testes
- **Testing Library**: Testes de componentes React
- **Cobertura**: Relatórios de cobertura de código

## 🛠️ Tecnologias

### Frontend
- **Next.js 15**: Framework React com App Router
- **TypeScript**: Tipagem estática
- **Material-UI**: Componentes de interface
- **React i18next**: Internacionalização
- **Stripe**: Integração de pagamentos

### Backend
- **Prisma**: ORM para banco de dados
- **PostgreSQL**: Banco de dados principal
- **JWT**: Autenticação
- **bcryptjs**: Hash de senhas
- **Cloudinary**: Upload de imagens
- **Stripe**: Processamento de pagamentos

### DevOps
- **Jest**: Testes automatizados
- **next-sitemap**: Geração de sitemap
- **ESLint**: Linting de código

## 📦 Instalação

### Pré-requisitos
- Node.js 18+
- PostgreSQL
- Conta no Cloudinary
- Conta no Stripe

### 1. Clone o repositório
```bash
git clone <repository-url>
cd site-gama-figth
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as variáveis de ambiente
Crie um arquivo `.env` baseado no `.env.example`:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/gamafigth"

# JWT
JWT_SECRET="your-super-secret-jwt-key-here"

# Stripe
STRIPE_PUBLISHABLE_KEY="pk_test_your_stripe_publishable_key"
STRIPE_SECRET_KEY="sk_test_your_stripe_secret_key"
STRIPE_WEBHOOK_SECRET="whsec_your_webhook_secret"

# Cloudinary
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"

# Site
SITE_URL="https://gamafigth.com.br"
```

### 4. Configure o banco de dados
```bash
# Gerar cliente Prisma
npm run db:generate

# Executar migrações
npm run db:migrate

# Popular banco com dados iniciais
npm run db:seed
```

### 5. Execute o projeto
```bash
# Desenvolvimento
npm run dev

# Produção
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
site-gama-figth/
├── app/                          # App Router (Next.js 15)
│   ├── admin/                    # Painel administrativo
│   │   ├── components/           # Componentes do admin
│   │   ├── layout.tsx           # Layout do admin
│   │   └── page.tsx             # Dashboard
│   ├── api/                      # API Routes
│   │   ├── auth/                 # Autenticação
│   │   ├── admin/                # APIs do admin
│   │   ├── upload/               # Upload de imagens
│   │   └── webhooks/             # Webhooks Stripe
│   ├── components/               # Componentes compartilhados
│   ├── globals.css              # Estilos globais
│   ├── layout.tsx               # Layout principal
│   └── page.tsx                 # Página inicial
├── contexts/                     # Contextos React
├── lib/                         # Utilitários e configurações
├── prisma/                      # Schema e migrações
├── scripts/                     # Scripts utilitários
├── __tests__/                   # Testes automatizados
├── next-sitemap.config.js       # Configuração do sitemap
├── jest.config.js              # Configuração do Jest
└── package.json
```

## 🧪 Testes

### Executar testes
```bash
# Todos os testes
npm test

# Modo watch
npm run test:watch

# Com cobertura
npm run test:coverage
```

### Tipos de testes
- **Testes de Componentes**: Verificação de renderização e interações
- **Testes de API**: Validação de endpoints
- **Testes de Integração**: Fluxos completos

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Servidor de desenvolvimento
npm run build            # Build de produção
npm run start            # Servidor de produção
npm run lint             # Linting de código

# Banco de dados
npm run db:migrate       # Executar migrações
npm run db:generate      # Gerar cliente Prisma
npm run db:seed          # Popular banco
npm run db:studio        # Interface do Prisma
npm run db:reset         # Reset do banco

# Testes
npm run test             # Executar testes
npm run test:watch       # Testes em modo watch
npm run test:coverage    # Testes com cobertura

# SEO
npm run postbuild        # Gerar sitemap (executado após build)

# Utilitários
npm run type-check       # Verificação de tipos TypeScript
```

## 🌐 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outras plataformas
- **Netlify**: Suporte completo ao Next.js
- **Railway**: Deploy com PostgreSQL incluído
- **Heroku**: Configuração manual necessária

## 🔐 Configuração de Segurança

### Variáveis de ambiente obrigatórias
- `JWT_SECRET`: Chave secreta para JWT
- `DATABASE_URL`: URL do banco PostgreSQL
- `STRIPE_SECRET_KEY`: Chave secreta do Stripe
- `CLOUDINARY_API_SECRET`: Chave secreta do Cloudinary

### Configurações recomendadas
- Use HTTPS em produção
- Configure CORS adequadamente
- Implemente rate limiting
- Use variáveis de ambiente seguras

## 📊 Monitoramento

### Logs
- Logs de erro automáticos
- Monitoramento de performance
- Rastreamento de transações

### Métricas
- Visitas e conversões
- Performance de vendas
- Uso do sistema

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🆘 Suporte

Para suporte, entre em contato:
- Email: jcmartins21@icloud.com
- WhatsApp: (21) 96015-0175

## 🗺️ Roadmap

### Próximas funcionalidades
- [ ] Sistema de notificações push
- [ ] App mobile nativo
- [ ] Integração com redes sociais
- [ ] Sistema de afiliados
- [ ] Chat em tempo real
- [ ] Analytics avançado
- [ ] Sistema de cupons
- [ ] Integração com WhatsApp Business
- [ ] Sistema de avaliações
- [ ] Blog com editor rico

### Melhorias técnicas
- [ ] PWA (Progressive Web App)
- [ ] Cache avançado
- [ ] CDN global
- [ ] Backup automático
- [ ] Monitoramento de uptime
- [ ] Testes E2E com Cypress
- [ ] CI/CD pipeline
- [ ] Docker containerization

---

**Desenvolvido com ❤️ pela equipe Gama Figth**
