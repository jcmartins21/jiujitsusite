'use client';

import MainMenu from '../components/MainMenu';
import { 
  Container, 
  Typography, 
  Box, 
  Paper,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { 
  CheckCircle,
  SportsMartialArts,
  School,
  EmojiEvents,
  Group
} from '@mui/icons-material';

export default function About() {
  const { t } = useTranslation();

  const values = [
    "Respeito e disciplina em todas as ações",
    "Busca constante pela excelência técnica",
    "Formação de caráter através do esporte",
    "Comunidade unida e solidária",
    "Transmissão de valores para a vida"
  ];

  const achievements = [
    "Mais de 500 alunos formados",
    "15 campeões regionais",
    "8 campeões estaduais",
    "3 campeões nacionais",
    "10 anos de experiência no ensino"
  ];

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
              {t('about_title')}
            </Typography>
            <Typography variant="h5" fontWeight={500}>
              {t('about_subtitle')}
            </Typography>
          </Box>
        </Container>
      </Paper>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        {/* História */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" fontWeight={700} gutterBottom textAlign="center">
            Nossa História
          </Typography>
          <Paper sx={{ p: 4, mt: 3 }}>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              {t('about_description')}
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Desde nossa fundação, temos nos dedicado a transmitir não apenas técnicas de Jiu Jitsu, 
              mas também valores fundamentais como respeito, disciplina, humildade e perseverança. 
              Nossa metodologia é baseada em anos de experiência e estudo constante das artes marciais.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Acreditamos que o Jiu Jitsu é mais que um esporte - é uma filosofia de vida que transforma 
              pessoas e constrói comunidades mais fortes e unidas.
            </Typography>
          </Paper>
        </Box>

        {/* Valores */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" fontWeight={700} gutterBottom textAlign="center">
            Nossos Valores
          </Typography>
          <Paper sx={{ p: 4, mt: 3 }}>
            <List>
              {values.map((value, index) => (
                <ListItem key={index} sx={{ py: 1 }}>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary={value} 
                    primaryTypographyProps={{ variant: 'h6', fontWeight: 500 }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>

        {/* Conquistas */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" fontWeight={700} gutterBottom textAlign="center">
            Nossas Conquistas
          </Typography>
          <Box 
            sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
              gap: 3,
              mt: 3
            }}
          >
            {achievements.map((achievement, index) => (
              <Paper key={index} sx={{ p: 3, textAlign: 'center' }}>
                <EmojiEvents sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" fontWeight={600}>
                  {achievement}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>

        {/* Equipe */}
        <Box>
          <Typography variant="h3" fontWeight={700} gutterBottom textAlign="center">
            Nossa Equipe
          </Typography>
          <Paper sx={{ p: 4, mt: 3 }}>
            <Box 
              sx={{ 
                display: 'grid', 
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: 4 
              }}
            >
              <Box textAlign="center">
                <Avatar 
                  sx={{ 
                    width: 120, 
                    height: 120, 
                    mx: 'auto', 
                    mb: 2,
                    bgcolor: 'primary.main'
                  }}
                >
                  <SportsMartialArts sx={{ fontSize: 60 }} />
                </Avatar>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Professor Mestre Silva
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Faixa Preta 3º Grau - Fundador da Gama Figth
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Mais de 15 anos de experiência no Jiu Jitsu, 
                  formado pela Gracie Barra e especializado em ensino infantil e adulto.
                </Typography>
              </Box>
              
              <Box textAlign="center">
                <Avatar 
                  sx={{ 
                    width: 120, 
                    height: 120, 
                    mx: 'auto', 
                    mb: 2,
                    bgcolor: 'secondary.main'
                  }}
                >
                  <School sx={{ fontSize: 60 }} />
                </Avatar>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Professor João Santos
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Faixa Preta 1º Grau - Coordenador Técnico
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Especialista em competição e preparação física, 
                  responsável pelo desenvolvimento técnico dos atletas.
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
} 