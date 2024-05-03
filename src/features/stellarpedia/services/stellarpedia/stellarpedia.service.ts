import { Config } from '../../../../services/config';
import { ServiceMixin } from '../../../../services/mixin';
import { useI18n } from 'vue-i18n';
import type { AppConfig } from '@/config/app.config';
import type { StellarpediaBookHeader, StellarpediaBookToc, StellarpediaToc } from '../../types/toc';
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
   * Attempts to fetch the table of contents for the Stellarpedia.
   * @param book The book id.
   * @returns The table of contents.
   */
  public static async fetchToc(book: string): Promise<StellarpediaToc> {
    const booksUrl = `${Config.getConfig<AppConfig>().STELLARPEDIA_BASE_URL}/books.yaml`;
    const bookTocUrl = `${Config.getConfig<AppConfig>().STELLARPEDIA_BASE_URL}/${book}/toc.yaml`;
    try {
      const booksPromise = fetch(booksUrl);
      const bookTocPromise = fetch(bookTocUrl);
      const [booksResponse, bookTocResponse] = await Promise.all([booksPromise, bookTocPromise]);
      const [booksText, bookTocText] = await Promise.all([
        booksResponse.text(),
        bookTocResponse.text(),
      ]);
      const books = jsyaml.load(booksText) as StellarpediaBookHeader[];
      const bookToc = jsyaml.load(bookTocText) as StellarpediaBookToc;
      const toc: StellarpediaToc = {
        books: books.map((book) => {
          if (book.id === bookToc.id) {
            return { ...book, ...bookToc };
          }
          return book;
        }),
      };
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
