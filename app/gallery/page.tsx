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
  Dialog,
  DialogContent,
  IconButton
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { 
  Close,
  PhotoCamera
} from '@mui/icons-material';
import { useState } from 'react';

export default function Gallery() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Dados mockados da galeria (serão substituídos pela API)
  const galleryData = [
    {
      id: 1,
      title: "Treino de Competição",
      description: "Equipe treinando para campeonatos",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
      category: "Treinos"
    },
    {
      id: 2,
      title: "Campeonato Regional",
      description: "Vitória no campeonato regional",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
      category: "Competições"
    },
    {
      id: 3,
      title: "Aula Infantil",
      description: "Crianças aprendendo Jiu Jitsu",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
      category: "Infantil"
    },
    {
      id: 4,
      title: "Graduação",
      description: "Cerimônia de graduação",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
      category: "Eventos"
    },
    {
      id: 5,
      title: "Treino Técnico",
      description: "Aperfeiçoamento de técnicas",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
      category: "Treinos"
    },
    {
      id: 6,
      title: "Equipe Unida",
      description: "Momentos de confraternização",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
      category: "Eventos"
    }
  ];

  const categories = ["Todas", "Treinos", "Competições", "Infantil", "Eventos"];

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
              Galeria de Fotos
            </Typography>
            <Typography variant="h5" fontWeight={500}>
              Momentos especiais da nossa equipe
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

        {/* Galeria de Fotos */}
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
            gap: 3 
          }}
        >
          {galleryData.map((photo) => (
            <Card 
              key={photo.id}
              sx={{ 
                height: '100%',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: 4
                }
              }}
              onClick={() => setSelectedImage(photo.image)}
            >
              <CardMedia
                component="img"
                height="250"
                image={photo.image}
                alt={photo.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {photo.title}
                  </Typography>
                  <Chip label={photo.category} size="small" color="secondary" />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {photo.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Estatísticas */}
        <Paper sx={{ bgcolor: 'grey.50', p: 4, mt: 6 }}>
          <Typography variant="h4" fontWeight={700} gutterBottom textAlign="center">
            Nossa Galeria em Números
          </Typography>
          
          <Box 
            sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr 1fr' },
              gap: 4,
              mt: 2
            }}
          >
            <Box textAlign="center">
              <PhotoCamera sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h3" fontWeight={700} color="primary.main">
                500+
              </Typography>
              <Typography variant="h6" fontWeight={600}>
                Fotos
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Momentos capturados
              </Typography>
            </Box>
            
            <Box textAlign="center">
              <PhotoCamera sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h3" fontWeight={700} color="primary.main">
                50+
              </Typography>
              <Typography variant="h6" fontWeight={600}>
                Eventos
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Competições e graduações
              </Typography>
            </Box>
            
            <Box textAlign="center">
              <PhotoCamera sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h3" fontWeight={700} color="primary.main">
                5
              </Typography>
              <Typography variant="h6" fontWeight={600}>
                Anos
              </Typography>
              <Typography variant="body2" color="text.secondary">
                De história documentada
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>

      {/* Modal para visualizar imagem */}
      <Dialog
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        maxWidth="md"
        fullWidth
      >
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          <IconButton
            onClick={() => setSelectedImage(null)}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              bgcolor: 'rgba(0,0,0,0.5)',
              color: 'white',
              zIndex: 1,
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.7)'
              }
            }}
          >
            <Close />
          </IconButton>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Visualização"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
} 