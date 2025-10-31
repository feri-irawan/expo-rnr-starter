import * as i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './locales/en';
import { id } from './locales/id';

const defaultLanguage = 'en';

// TODO: add more languages
const resources = {
  en: { translation: en },
  id: { translation: id },
};

const getInitialLanguage = async () => {
  // TODO: get language from native storage
  return defaultLanguage;
};

export const initI18n = async () => {
  const language = await getInitialLanguage();

  await i18next.use(initReactI18next).init({
    resources,
    lng: language,
    fallbackLng: defaultLanguage,
  });

  return language;
};
