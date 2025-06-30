'use client';

import MainMenu from '../components/MainMenu';
import { 
  Container, 
  Typography, 
  Box, 
  Paper,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Avatar,
  Button
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { 
  CalendarToday,
  Person,
  ArrowForward
} from '@mui/icons-material';

export default function Blog() {
  const { t } = useTranslation();

  // Dados mockados do blog (serão substituídos pela API)
  const blogPosts = [
    {
      id: 1,
      title: "Equipe Gama Figth conquista 5 medalhas no Campeonato Regional",
      excerpt: "Nossa equipe brilhou no último campeonato regional, conquistando 3 medalhas de ouro, 1 de prata e 1 de bronze...",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
      category: "Competições",
      author: {
        name: "Professor João Silva",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
      },
      publishedAt: "2024-01-15",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Novos horários de aula para 2024",
      excerpt: "Confira os novos horários de aula que entrarão em vigor a partir de fevereiro de 2024...",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
      category: "Avisos",
      author: {
        name: "Administração",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
      },
      publishedAt: "2024-01-10",
      readTime: "3 min"
    },
    {
      id: 3,
      title: "Dicas de alimentação para atletas de Jiu Jitsu",
      excerpt: "A alimentação é fundamental para o desempenho no tatame. Confira nossas dicas...",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
      category: "Dicas",
      author: {
        name: "Nutricionista Maria Santos",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
      },
      publishedAt: "2024-01-08",
      readTime: "7 min"
    },
    {
      id: 4,
      title: "Graduação especial: 20 alunos recebem novas faixas",
      excerpt: "Em uma cerimônia emocionante, 20 alunos foram graduados para suas novas faixas...",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
      category: "Eventos",
      author: {
        name: "Professor João Silva",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
      },
      publishedAt: "2024-01-05",
      readTime: "4 min"
    },
    {
      id: 5,
      title: "Técnica da semana: Passagem de guarda",
      excerpt: "Aprenda uma das técnicas mais fundamentais do Jiu Jitsu: a passagem de guarda...",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
      category: "Técnicas",
      author: {
        name: "Professor João Silva",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
      },
      publishedAt: "2024-01-03",
      readTime: "6 min"
    },
    {
      id: 6,
      title: "História do Jiu Jitsu: Das origens ao Brasil",
      excerpt: "Conheça a fascinante história do Jiu Jitsu, desde suas origens no Japão até sua evolução no Brasil...",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
      category: "História",
      author: {
        name: "Professor João Silva",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
      },
      publishedAt: "2024-01-01",
      readTime: "8 min"
    }
  ];

  const categories = ["Todas", "Competições", "Avisos", "Dicas", "Eventos", "Técnicas", "História"];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <>
      <MainMenu />
      
      {/* Hero Section */}
      <Paper 
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80)',
          minHeight: '40vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Container maxWidth="md">
          <Box textAlign="center" py={6}>
            <Typography variant="h2" fontWeight={700} gutterBottom>
              Blog & Notícias
            </Typography>
            <Typography variant="h5" fontWeight={500}>
              Fique por dentro das novidades da equipe
            </Typography>
          </Box>
        </Container>
      </Paper>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        {/* Categorias */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" fontWeight={700} gutterBottom textAlign="center">
            Categorias
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center', mt: 2 }}>
            {categories.map((category, index) => (
              <Chip 
                key={index} 
                label={category} 
                color={index === 0 ? "primary" : "default"}
                variant={index === 0 ? "filled" : "outlined"}
                clickable
                sx={{ mb: 1 }}
              />
            ))}
          </Box>
        </Box>

        {/* Posts do Blog */}
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4 
          }}
        >
          {blogPosts.map((post) => (
            <Card 
              key={post.id}
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={post.image}
                alt={post.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Chip label={post.category} size="small" color="secondary" />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <CalendarToday sx={{ fontSize: 16, color: 'text.secondary' }} />
                    <Typography variant="caption" color="text.secondary">
                      {formatDate(post.publishedAt)}
                    </Typography>
                  </Box>
                </Box>
                
                <Typography variant="h5" fontWeight={700} gutterBottom sx={{ mb: 2 }}>
                  {post.title}
                </Typography>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1 }}>
                  {post.excerpt}
                </Typography>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar 
                      src={post.author.avatar} 
                      sx={{ width: 32, height: 32 }}
                    />
                    <Typography variant="body2" fontWeight={600}>
                      {post.author.name}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="caption" color="text.secondary">
                      {post.readTime}
                    </Typography>
                    <Button 
                      size="small" 
                      endIcon={<ArrowForward />}
                      sx={{ textTransform: 'none' }}
                    >
                      Ler mais
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Newsletter */}
        <Paper sx={{ bgcolor: 'primary.main', color: 'white', p: 4, mt: 6, textAlign: 'center' }}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Fique por dentro das novidades!
          </Typography>
          <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
            Inscreva-se em nossa newsletter e receba as últimas notícias da equipe
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, maxWidth: 400, mx: 'auto' }}>
            <input
              type="email"
              placeholder="Seu e-mail"
              style={{
                flex: 1,
                padding: '12px 16px',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px'
              }}
            />
            <Button 
              variant="contained" 
              sx={{ 
                bgcolor: 'white', 
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'grey.100'
                }
              }}
            >
              Inscrever
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
} 