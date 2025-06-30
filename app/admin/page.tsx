'use client';

import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider
} from '@mui/material';
import {
  ShoppingCart,
  People,
  Inventory,
  PhotoLibrary,
  TrendingUp,
  AttachMoney,
  Visibility,
  Add
} from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useRouter } from 'next/navigation';

interface DashboardStats {
  totalProducts: number;
  totalUsers: number;
  totalOrders: number;
  totalPosts: number;
  totalGallery: number;
  revenue: number;
}

export default function AdminDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats>({
    totalProducts: 0,
    totalUsers: 0,
    totalOrders: 0,
    totalPosts: 0,
    totalGallery: 0,
    revenue: 0
  });

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.replace('/login');
      } else if (user.role !== 'ADMIN') {
        router.replace('/');
      }
    }
  }, [user, loading, router]);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const response = await fetch('/api/admin/stats');
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Erro ao buscar estatísticas:', error);
    }
  };

  const statCards = [
    {
      title: 'Produtos',
      value: stats.totalProducts,
      icon: <Inventory color="primary" />,
      color: '#1976d2'
    },
    {
      title: 'Usuários',
      value: stats.totalUsers,
      icon: <People color="success" />,
      color: '#2e7d32'
    },
    {
      title: 'Pedidos',
      value: stats.totalOrders,
      icon: <ShoppingCart color="warning" />,
      color: '#ed6c02'
    },
    {
      title: 'Posts',
      value: stats.totalPosts,
      icon: <PhotoLibrary color="info" />,
      color: '#0288d1'
    },
    {
      title: 'Galeria',
      value: stats.totalGallery,
      icon: <PhotoLibrary color="secondary" />,
      color: '#9c27b0'
    },
    {
      title: 'Receita',
      value: `R$ ${stats.revenue.toFixed(2)}`,
      icon: <AttachMoney color="error" />,
      color: '#d32f2f'
    }
  ];

  const recentActivities = [
    { text: 'Novo produto adicionado: Kimono Premium', time: '2 horas atrás' },
    { text: 'Pedido #1234 confirmado', time: '4 horas atrás' },
    { text: 'Novo usuário registrado', time: '6 horas atrás' },
    { text: 'Post publicado: Técnicas de Jiu Jitsu', time: '1 dia atrás' },
  ];

  return (
    <Box>
      {/* Exibir nome e papel do usuário logado */}
      {user && (
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Usuário: {user.name} ({user.role})
        </Typography>
      )}
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      {/* Cards de Estatísticas */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {statCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Box>
                    <Typography color="textSecondary" gutterBottom>
                      {card.title}
                    </Typography>
                    <Typography variant="h4" component="div">
                      {card.value}
                    </Typography>
                  </Box>
                  <Box sx={{ color: card.color }}>
                    {card.icon}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Ações Rápidas */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Ações Rápidas
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<Add />}
                  href="/admin/products/new"
                >
                  Novo Produto
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<Add />}
                  href="/admin/posts/new"
                >
                  Novo Post
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<Add />}
                  href="/admin/gallery/new"
                >
                  Nova Foto
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<Visibility />}
                  href="/admin/orders"
                >
                  Ver Pedidos
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Atividades Recentes */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Atividades Recentes
            </Typography>
            <List>
              {recentActivities.map((activity, index) => (
                <Box key={index}>
                  <ListItem>
                    <ListItemIcon>
                      <TrendingUp color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={activity.text}
                      secondary={activity.time}
                    />
                  </ListItem>
                  {index < recentActivities.length - 1 && <Divider />}
                </Box>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
} 