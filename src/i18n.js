import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationAZ from './locales/az.json';
import translationRU from './locales/ru.json';
import translationEN from './locales/en.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      az: { translation: translationAZ },
      ru: { translation: translationRU },
      en: { translation: translationEN }
    },
    fallbackLng: 'az', // Язык по умолчанию
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;