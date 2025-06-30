'use client';

import MainMenu from '../components/MainMenu';
import { 
  Container, 
  Typography, 
  Box, 
  Paper,
  Card,
  CardContent,
  Button,
  Chip,
  Divider
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { 
  LocationOn,
  Phone,
  Email,
  AccessTime,
  Directions,
  WhatsApp
} from '@mui/icons-material';

export default function Branches() {
  const { t } = useTranslation();

  const branches = [
    {
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
    {
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
    {
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
    }
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
              {t('branches_title')}
            </Typography>
            <Typography variant="h5" fontWeight={500}>
              {t('branches_subtitle')}
            </Typography>
          </Box>
        </Container>
      </Paper>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h3" fontWeight={700} gutterBottom textAlign="center" sx={{ mb: 6 }}>
          Nossas Unidades
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {branches.map((branch, index) => (
            <Paper key={index} sx={{ p: 4 }}>
              <Box 
                sx={{ 
                  display: 'grid', 
                  gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
                  gap: 4 
                }}
              >
                {/* Informações principais */}
                <Box>
                  <Typography variant="h4" fontWeight={700} gutterBottom color="primary">
                    {branch.name}
                  </Typography>
                  
                  <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                    {branch.description}
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LocationOn color="primary" />
                      <Typography variant="body1">
                        {branch.address}, {branch.city}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Phone color="primary" />
                      <Typography variant="body1">
                        {branch.phone}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Email color="primary" />
                      <Typography variant="body1">
                        {branch.email}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <AccessTime color="primary" />
                      <Typography variant="body1">
                        {branch.hours}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                    {branch.features.map((feature, featureIndex) => (
                      <Chip 
                        key={featureIndex} 
                        label={feature} 
                        color="primary" 
                        variant="outlined"
                        size="small"
                      />
                    ))}
                  </Box>
                </Box>

                {/* Botões de ação */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center' }}>
                  <Button 
                    variant="contained" 
                    fullWidth 
                    href={branch.coordinates}
                    target="_blank"
                    startIcon={<Directions />}
                    sx={{ py: 1.5 }}
                  >
                    Como Chegar
                  </Button>
                  
                  <Button 
                    variant="outlined" 
                    fullWidth 
                    href={`https://wa.me/55${branch.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    startIcon={<WhatsApp />}
                    sx={{ py: 1.5 }}
                  >
                    WhatsApp
                  </Button>
                  
                  <Button 
                    variant="outlined" 
                    fullWidth 
                    href={`tel:${branch.phone}`}
                    startIcon={<Phone />}
                    sx={{ py: 1.5 }}
                  >
                    Ligar Agora
                  </Button>
                </Box>
              </Box>
            </Paper>
          ))}
        </Box>

        {/* Call to Action */}
        <Paper sx={{ bgcolor: 'primary.main', color: 'white', p: 4, mt: 6, textAlign: 'center' }}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Não encontrou uma unidade próxima?
          </Typography>
          <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
            Entre em contato conosco e vamos avaliar a possibilidade de abrir uma nova filial na sua região!
          </Typography>
          <Button 
            variant="outlined" 
            size="large" 
            href="mailto:contato@gamafigth.com.br"
            sx={{ 
              color: 'white', 
              borderColor: 'white',
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255,255,255,0.1)'
              }
            }}
          >
            Solicitar Nova Filial
          </Button>
        </Paper>
      </Container>
    </>
  );
} 