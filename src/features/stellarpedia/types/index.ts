import type { Locale } from 'vue-i18n';

export interface StellarpediaBookHeader {
  id: string;
  title: Record<Locale, string>;
  icon: string;
  default: {
    chapter: string;
    article: string;
  };
}

export interface StellarpediaBookToc extends StellarpediaBookHeader {
  chapters?: {
    id: string;
    title: Record<Locale, string>;
    articles?: {
      id: string;
      title: Record<Locale, string>;
    }[];
  }[];
}
