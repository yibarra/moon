import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import common_en from './translations/en/common.json';
import common_qu from './translations/qu/common.json';

// options
const options = {
  resources: {
    en: { translation: common_en, },
    qu: { translation: common_qu, }
  },
  lng: "pt",
  fallbackLng: ['qu', 'en']
};

// locales
const locales = Object.keys(options.resources);

// get current locate
const getCurrentLocale = () => i18n.languages.find((lng => locales.indexOf(lng) !== -1));

i18n
  .use(initReactI18next)
  .init(options);

export { i18n, locales, getCurrentLocale };
export default i18n;