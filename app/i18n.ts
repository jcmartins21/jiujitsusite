'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationPT from './locales/pt/translation.json';
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

// Verificar se já foi inicializado para evitar múltiplas inicializações
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        pt: { translation: translationPT },
        en: { translation: translationEN },
        es: { translation: translationES },
      },
      lng: 'pt',
      fallbackLng: 'pt',
      interpolation: { escapeValue: false },
      react: {
        useSuspense: false,
      },
    });
}

export default i18n; 