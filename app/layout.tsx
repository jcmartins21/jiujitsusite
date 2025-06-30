import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CssBaseline } from '@mui/material';
import I18nProvider from './components/I18nProvider';
import ThemeProvider from './components/ThemeProvider';
import { AuthProvider } from '../contexts/AuthContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Gama Figth - Equipe de Jiu Jitsu",
  description: "Equipe de Jiu Jitsu com treinos, competições e graduações. Venha fazer parte da nossa família!",
  keywords: "jiu jitsu, bjj, artes marciais, treino, competição, graduação",
  authors: [{ name: 'Gama Figth Team' }],
  openGraph: {
    title: "Gama Figth - Equipe de Jiu Jitsu",
    description: "Equipe de Jiu Jitsu com treinos, competições e graduações",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={inter.variable}>
        <I18nProvider>
          <ThemeProvider>
            <AuthProvider>
              <CssBaseline />
              {children}
            </AuthProvider>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
