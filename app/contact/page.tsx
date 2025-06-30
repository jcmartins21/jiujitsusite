'use client';

import MainMenu from '../components/MainMenu';
import { 
  Container, 
  Typography, 
  Box, 
  Paper,
  TextField,
  Button,
  Grid,
  Alert,
  Snackbar
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { 
  Email,
  Phone,
  LocationOn,
  Send,
  WhatsApp
} from '@mui/icons-material';
import { useState } from 'react';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Assunto é obrigatório';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSnackbar({
          open: true,
          message: data.message,
          severity: 'success'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSnackbar({
          open: true,
          message: data.error || 'Erro ao enviar mensagem',
          severity: 'error'
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Erro ao enviar mensagem',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'E-mail',
      value: 'contato@gamafigth.com.br',
      link: 'mailto:contato@gamafigth.com.br'
    },
    {
      icon: <Phone sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Telefone',
      value: '(11) 99999-9999',
      link: 'tel:+5511999999999'
    },
    {
      icon: <WhatsApp sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'WhatsApp',
      value: '(11) 99999-9999',
      link: 'https://wa.me/5511999999999'
    },
    {
      icon: <LocationOn sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Endereço',
      value: 'Rua das Flores, 123 - Centro, São Paulo - SP',
      link: 'https://maps.google.com/?q=Rua+das+Flores+123+São+Paulo'
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
          minHeight: '30vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Container maxWidth="md">
          <Box textAlign="center" py={4}>
            <Typography variant="h2" fontWeight={700} gutterBottom>
              Entre em Contato
            </Typography>
            <Typography variant="h5" fontWeight={500}>
              Estamos aqui para ajudar você
            </Typography>
          </Box>
        </Container>
      </Paper>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          {/* Formulário de Contato */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h4" fontWeight={700} gutterBottom>
                Envie sua mensagem
              </Typography>
              
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Preencha o formulário abaixo e entraremos em contato o mais breve possível.
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Nome completo"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      error={!!errors.name}
                      helperText={errors.name}
                      required
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="E-mail"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      error={!!errors.email}
                      helperText={errors.email}
                      required
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Telefone (opcional)"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Assunto"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      error={!!errors.subject}
                      helperText={errors.subject}
                      required
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Mensagem"
                      multiline
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      error={!!errors.message}
                      helperText={errors.message}
                      required
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      startIcon={<Send />}
                      disabled={loading}
                      sx={{ 
                        py: 1.5, 
                        px: 4,
                        fontSize: '1.1rem'
                      }}
                    >
                      {loading ? 'Enviando...' : 'Enviar Mensagem'}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>

          {/* Informações de Contato */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 4, height: 'fit-content' }}>
              <Typography variant="h5" fontWeight={700} gutterBottom>
                Informações de Contato
              </Typography>
              
              <Box sx={{ mt: 3 }}>
                {contactInfo.map((info, index) => (
                  <Box 
                    key={index} 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 2, 
                      mb: 3,
                      p: 2,
                      borderRadius: 1,
                      '&:hover': {
                        bgcolor: 'grey.50'
                      }
                    }}
                  >
                    {info.icon}
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        {info.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        component="a"
                        href={info.link}
                        sx={{ 
                          textDecoration: 'none',
                          '&:hover': {
                            color: 'primary.main'
                          }
                        }}
                      >
                        {info.value}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Mapa */}
        <Paper sx={{ p: 4, mt: 4 }}>
          <Typography variant="h5" fontWeight={700} gutterBottom textAlign="center">
            Nossa Localização
          </Typography>
          
          <Box 
            sx={{ 
              mt: 3, 
              height: 400, 
              bgcolor: 'grey.200',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 1
            }}
          >
            <Typography variant="h6" color="text.secondary">
              Mapa será integrado aqui
            </Typography>
          </Box>
        </Paper>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
      >
        <Alert 
          onClose={() => setSnackbar(prev => ({ ...prev, open: false }))} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
} 