'use client';

import MainMenu from './components/MainMenu';
import { 
  Typography, 
  Container, 
  Box, 
  Button, 
  Card, 
  CardContent,
  Paper
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { 
  SportsMartialArts, 
  School, 
  Home as HomeIcon, 
  EmojiEvents,
  ArrowForward
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';

export default function Home() {
  const { t } = useTranslation();
  const { user } = useAuth();

  const features = [
    {
      icon: <SportsMartialArts sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: t('feature_1_title'),
      description: t('feature_1_desc')
    },
    {
      icon: <School sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: t('feature_2_title'),
      description: t('feature_2_desc')
    },
    {
      icon: <HomeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: t('feature_3_title'),
      description: t('feature_3_desc')
    },
    {
      icon: <EmojiEvents sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: t('feature_4_title'),
      description: t('feature_4_desc')
    }
  ];

  return (
    <>
      <MainMenu />
      
      {/* Painel de boas-vindas por papel */}
      {user && (
        <Box sx={{ p: 2, mb: 2, bgcolor: 'primary.light', borderRadius: 2 }}>
          <Typography variant="h6">
            Bem-vindo, {user.name}! Seu papel: {user.role}
          </Typography>
          {user.role === 'ADMIN' && (
            <Button variant="contained" color="primary" href="/admin" sx={{ mt: 1 }}>Ir para o Painel Administrativo</Button>
          )}
          {user.role === 'GRAMESTRE' && (
            <Button variant="contained" color="secondary" href="/painel-gramestre" sx={{ mt: 1 }}>Painel Grã Mestre</Button>
          )}
          {user.role === 'MESTRE' && (
            <Button variant="contained" color="secondary" href="/painel-mestre" sx={{ mt: 1 }}>Painel Mestre</Button>
          )}
          {user.role === 'ALUNO' && (
            <Button variant="contained" color="secondary" href="/painel-aluno" sx={{ mt: 1 }}>Painel Aluno</Button>
          )}
        </Box>
      )}

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
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80)',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Container maxWidth="md">
          <Box textAlign="center" py={8}>
            <Typography variant="h2" fontWeight={700} gutterBottom>
              {t('hero_title')}
            </Typography>
            <Typography variant="h4" fontWeight={500} gutterBottom>
              {t('hero_subtitle')}
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              {t('hero_description')}
            </Typography>
            <Button 
              variant="contained" 
              size="large" 
              href="/about"
              endIcon={<ArrowForward />}
              sx={{ 
                px: 4, 
                py: 1.5, 
                fontSize: '1.1rem',
                backgroundColor: 'secondary.main',
                '&:hover': {
                  backgroundColor: 'secondary.dark'
                }
              }}
            >
              {t('cta_button')}
            </Button>
          </Box>
        </Container>
      </Paper>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" fontWeight={700} gutterBottom>
            {t('features_title')}
          </Typography>
        </Box>
        
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
            gap: 4 
          }}
        >
          {features.map((feature, index) => (
            <Card 
              key={index}
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
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Box sx={{ mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      {/* Call to Action Section */}
      <Paper sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
        <Container maxWidth="md">
          <Box textAlign="center">
            <Typography variant="h4" fontWeight={700} gutterBottom>
              Pronto para começar sua jornada?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Entre em contato conosco e agende sua aula experimental gratuita
            </Typography>
            <Button 
              variant="outlined" 
              size="large" 
              href="/branches"
              sx={{ 
                color: 'white', 
                borderColor: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Encontrar Filial
            </Button>
          </Box>
        </Container>
      </Paper>
    </>
  );
}
