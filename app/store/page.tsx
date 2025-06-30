'use client';

import MainMenu from '../components/MainMenu';
import { 
  Container, 
  Typography, 
  Box, 
  Paper,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Rating
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { 
  ShoppingCart,
  Favorite,
  Star,
  LocalShipping,
  Security
} from '@mui/icons-material';

export default function Store() {
  const { t } = useTranslation();

  const products = [
    {
      id: 1,
      name: "Kimono Gama Figth Pro",
      price: 299.90,
      originalPrice: 399.90,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
      category: "Kimono",
      rating: 4.8,
      reviews: 127,
      description: "Kimono profissional com tecido de alta qualidade, ideal para competições e treinos intensos.",
      features: ["Tecido Premium", "Resistente", "Lavagem Fácil", "Bordado Exclusivo"],
      inStock: true
    },
    {
      id: 2,
      name: "Faixa Gama Figth",
      price: 89.90,
      originalPrice: 119.90,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
      category: "Faixa",
      rating: 4.9,
      reviews: 89,
      description: "Faixa oficial da Gama Figth com bordado personalizado e qualidade superior.",
      features: ["Bordado Exclusivo", "Durabilidade", "Cores Vibrantes", "Tamanhos Disponíveis"],
      inStock: true
    },
    {
      id: 3,
      name: "Rash Guard Gama Figth",
      price: 159.90,
      originalPrice: 199.90,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
      category: "Rash Guard",
      rating: 4.7,
      reviews: 156,
      description: "Rash guard com tecnologia anti-bacteriana e design exclusivo da Gama Figth.",
      features: ["Anti-bacteriano", "Secagem Rápida", "Proteção UV", "Elástico"],
      inStock: true
    },
    {
      id: 4,
      name: "Mochila Gama Figth",
      price: 189.90,
      originalPrice: 249.90,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
      category: "Acessórios",
      rating: 4.6,
      reviews: 73,
      description: "Mochila esportiva com compartimentos específicos para equipamentos de Jiu Jitsu.",
      features: ["Compartimentos Especiais", "Resistente à Água", "Alças Ajustáveis", "Logo Bordado"],
      inStock: false
    },
    {
      id: 5,
      name: "Tênis Gama Figth",
      price: 279.90,
      originalPrice: 349.90,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
      category: "Calçados",
      rating: 4.5,
      reviews: 42,
      description: "Tênis esportivo com design exclusivo e tecnologia de amortecimento avançada.",
      features: ["Amortecimento", "Leve", "Respirável", "Sola Antiderrapante"],
      inStock: true
    },
    {
      id: 6,
      name: "Camiseta Gama Figth",
      price: 79.90,
      originalPrice: 99.90,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
      category: "Vestuário",
      rating: 4.4,
      reviews: 98,
      description: "Camiseta casual com logo da Gama Figth, perfeita para o dia a dia.",
      features: ["100% Algodão", "Estampa Durável", "Cores Disponíveis", "Tamanhos P/M/G/GG"],
      inStock: true
    }
  ];

  const categories = ["Todos", "Kimono", "Faixa", "Rash Guard", "Acessórios", "Calçados", "Vestuário"];

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
              {t('store_title')}
            </Typography>
            <Typography variant="h5" fontWeight={500}>
              {t('store_subtitle')}
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

        {/* Produtos */}
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' },
            gap: 3 
          }}
        >
          {products.map((product) => (
            <Card key={product.id} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: 'cover' }}
              />
              
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Chip label={product.category} size="small" color="secondary" />
                  {!product.inStock && (
                    <Chip label="Esgotado" size="small" color="error" />
                  )}
                </Box>
                
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {product.name}
                </Typography>
                
                <Typography variant="body2" color="text.secondary" paragraph>
                  {product.description}
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Rating value={product.rating} precision={0.1} size="small" readOnly />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    ({product.reviews})
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                  {product.features.slice(0, 2).map((feature, index) => (
                    <Chip 
                      key={index} 
                      label={feature} 
                      size="small" 
                      variant="outlined"
                    />
                  ))}
                </Box>
                
                <Box sx={{ mt: 'auto' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Typography variant="h5" fontWeight={700} color="primary">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                      R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                    </Typography>
                  </Box>
                  
                  <Button 
                    variant="contained" 
                    fullWidth 
                    startIcon={<ShoppingCart />}
                    disabled={!product.inStock}
                    sx={{ mb: 1 }}
                  >
                    {product.inStock ? 'Adicionar ao Carrinho' : 'Produto Esgotado'}
                  </Button>
                  
                  <Button 
                    variant="outlined" 
                    fullWidth 
                    startIcon={<Favorite />}
                    disabled={!product.inStock}
                  >
                    Favoritar
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Benefícios */}
        <Paper sx={{ bgcolor: 'grey.50', p: 4, mt: 6 }}>
          <Typography variant="h4" fontWeight={700} gutterBottom textAlign="center">
            Por que comprar na Gama Figth?
          </Typography>
          
          <Box 
            sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
              gap: 3,
              mt: 3
            }}
          >
            <Box textAlign="center">
              <LocalShipping sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Frete Grátis
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Para compras acima de R$ 200 em todo o Brasil
              </Typography>
            </Box>
            
            <Box textAlign="center">
              <Security sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Garantia
              </Typography>
              <Typography variant="body2" color="text.secondary">
                30 dias de garantia em todos os produtos
              </Typography>
            </Box>
            
            <Box textAlign="center">
              <Star sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Qualidade
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Produtos testados e aprovados por nossos atletas
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
} 