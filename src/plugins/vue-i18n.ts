import { createI18n } from 'vue-i18n';
import de from '@/assets/locales/de.yaml';

export const supportedLocales = ['de'];

// Function to get the user's locale if it's supported, or the fallback locale
function getLocale() {
  const userLocale = navigator.language.split('-')[0];
  return supportedLocales.includes(userLocale) ? userLocale : 'de';
}

export const i18n = createI18n({
  legacy: false,
  locale: getLocale(),
  fallbackLocale: 'de',
  messages: {
    de,
  },
});
