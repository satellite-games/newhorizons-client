import type { AppConfig } from '@/config/app.config';
import type { StellarpediaBookHeader, StellarpediaBookToc } from '../../types';
import jsyaml from 'js-yaml';
import { Config, ServiceMixin, intl } from '@spuxx/browser-utils';

const headers: Record<string, string> = {
  // 'Cache-Control': 'no-cache',
};

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
  public static async fetchArticle(book: string, chapter: string, article: string, locale: string) {
    const url = `${Config.getConfig<AppConfig>().STELLARPEDIA_BASE_URL}/${book}/${chapter}/${article}/${locale}.md`;
    try {
      const response = await fetch(url, { headers });
      const text = await response.text();
      return this.preProcessArticle(text, locale);
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
      const response = await fetch(url, { headers });
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
      const response = await fetch(url, { headers });
      const text = await response.text();
      const toc = jsyaml.load(text) as StellarpediaBookToc;
      return toc;
    } catch (error) {
      throw new Error(`Unable to retrieve table of contents.`);
    }
  }

  private static preProcessArticle(article: string, locale: string) {
    let preProcessedArticle = article;
    // Replace partial image urls will full urls
    preProcessedArticle = preProcessedArticle.replace(
      '<img src="/books/',
      `<img class="v-card--variant-elevated" src="${Config.getConfig<AppConfig>().STELLARPEDIA_BASE_URL}/`,
    );
    // Replace article urls with correct local urls and remove filename
    preProcessedArticle = preProcessedArticle.replace('](/books/', `](/stellarpedia/`);
    preProcessedArticle = preProcessedArticle.replace(`/${locale}.md`, '');
    // Replace various types of blocks
    preProcessedArticle = preProcessedArticle.replace(
      '> TIP ',
      `> <p class="blockquote-header">${intl('stellarpedia.block.tip')}</p>`,
    );

    return preProcessedArticle;
  }
}
