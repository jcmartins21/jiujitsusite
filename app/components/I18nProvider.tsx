'use client';

import { useEffect } from 'react';
import '../i18n';

interface I18nProviderProps {
  children: React.ReactNode;
}

export default function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    // Garantir que o i18n seja inicializado no lado do cliente
    import('../i18n');
  }, []);

  return <>{children}</>;
} 