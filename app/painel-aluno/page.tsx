'use client';
import { useAuth } from '../../contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import MainMenu from '../components/MainMenu';
import { Box, Typography } from '@mui/material';

export default function PainelAluno() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.replace('/login');
      } else if (user.role !== 'ALUNO') {
        router.replace('/');
      }
    }
  }, [user, loading, router]);

  return (
    <>
      <MainMenu />
      <Box sx={{ p: 4 }}>
        <Typography variant="h4">Painel Aluno</Typography>
        <Typography>Bem-vindo ao painel exclusivo do Aluno!</Typography>
      </Box>
    </>
  );
} 