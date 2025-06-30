"use client";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';
import Image from 'next/image';
import { useAuth } from '../../contexts/AuthContext';

const languages = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
];

export default function MainMenu() {
  const { t, i18n } = useTranslation();
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [langAnchorEl, setLangAnchorEl] = React.useState<null | HTMLElement>(null);

  // Menus por papel
  let customPages = ['home', 'about', 'branches', 'store'];
  if (!user) customPages.push('login');
  if (user && user.role === 'ADMIN') customPages.push('admin');
  if (user && user.role === 'GRAMESTRE') customPages.push('painel-gramestre');
  if (user && user.role === 'MESTRE') customPages.push('painel-mestre');
  if (user && user.role === 'ALUNO') customPages.push('painel-aluno');

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLangMenu = (event: React.MouseEvent<HTMLElement>) => {
    setLangAnchorEl(event.currentTarget);
  };
  const handleLangClose = () => {
    setLangAnchorEl(null);
  };
  const handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangAnchorEl(null);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Logomarca */}
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          <Typography variant="h6" component="div" sx={{ ml: 1, fontWeight: 700 }}>
            Gama Figth
          </Typography>
        </Box>
        {/* Menu de páginas */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {customPages.map((page) => (
            <Button key={page} sx={{ color: '#fff', mx: 1 }} href={`/${page === 'home' ? '' : page}`}>{t(page)}</Button>
          ))}
        </Box>
        {/* Menu mobile */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={handleMenu}>
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            {customPages.map((page) => (
              <MenuItem key={page} onClick={handleClose} component="a" href={`/${page === 'home' ? '' : page}`}>{t(page)}</MenuItem>
            ))}
          </Menu>
        </Box>
        {/* Seletor de idioma */}
        <IconButton color="inherit" onClick={handleLangMenu} sx={{ ml: 2 }}>
          <LanguageIcon />
        </IconButton>
        <Menu anchorEl={langAnchorEl} open={Boolean(langAnchorEl)} onClose={handleLangClose}>
          {languages.map((lang) => (
            <MenuItem key={lang.code} selected={i18n.language === lang.code} onClick={() => handleChangeLanguage(lang.code)}>
              {lang.label}
            </MenuItem>
          ))}
        </Menu>
        {/* Usuário logado */}
        {user && (
          <Box sx={{ ml: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" color="inherit">
              {user.name} ({user.role})
            </Typography>
            <Button color="inherit" onClick={logout}>Sair</Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
} 