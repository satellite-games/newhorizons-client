import type { Locale } from 'vue-i18n';

export interface StellarpediaBookHeader {
  id: string;
  title: Record<Locale, string>;
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

export interface StellarpediaToc {
  books: StellarpediaBookToc[];
}
