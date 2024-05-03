import { Config } from '../../../../services/config';
import { ServiceMixin } from '../../../../services/mixin';
import { useI18n } from 'vue-i18n';
import type { AppConfig } from '@/config/app.config';
import type { StellarpediaBookHeader, StellarpediaBookToc } from '../../types';
import jsyaml from 'js-yaml';

/**
 * Provides Stellarpedia-related functionalities like looking up articles and
 * other things.
 */
export class Stellarpedia extends ServiceMixin<Stellarpedia>() {
  /**
   * Attempts to fetch an article and return it.
   * @param book The book id.
   * @param chapter The chapter id.
   * @param article The article id.
   * @returns The article.
   */
  public static async fetchArticle(book: string, chapter: string, article: string) {
    const { locale } = useI18n();
    const url = `${Config.getConfig<AppConfig>().STELLARPEDIA_BASE_URL}/${book}/${chapter}/${article}/${locale.value}.md`;
    try {
      const response = await fetch(url);
      const text = await response.text();
      return this.preProcessArticle(text, locale.value);
    } catch (error) {
      throw new Error(`Unable to retrieve article from '${url}'.`);
    }
  }

  /**
   * Attempts to fetch the list of all available books.
   * @returns The list of books.
   */
  public static async fetchBooks(): Promise<StellarpediaBookHeader[]> {
    const url = `${Config.getConfig<AppConfig>().STELLARPEDIA_BASE_URL}/books.yaml`;
    try {
      const response = await fetch(url);
      const text = await response.text();
      const books = jsyaml.load(text) as StellarpediaBookHeader[];
      return books;
    } catch (error) {
      throw new Error(`Unable to retrieve list of books.`);
    }
  }

  /**
   * Attempts to fetch the table of contents for the Stellarpedia.
   * @param book The book id.
   * @returns The table of contents.
   */
  public static async fetchToc(book: string): Promise<StellarpediaBookToc> {
    const url = `${Config.getConfig<AppConfig>().STELLARPEDIA_BASE_URL}/${book}/toc.yaml`;
    try {
      const response = await fetch(url);
      const text = await response.text();
      const toc = jsyaml.load(text) as StellarpediaBookToc;
      return toc;
    } catch (error) {
      throw new Error(`Unable to retrieve table of contents.`);
    }
  }

  private static preProcessArticle(article: string, locale: string) {
    let preProcessedArticle = article;
    preProcessedArticle = preProcessedArticle.replace('books/', `${locale}/stellarpedia/`);
    preProcessedArticle = preProcessedArticle.replace(`/${locale}.md`, '');
    return preProcessedArticle;
  }
}
