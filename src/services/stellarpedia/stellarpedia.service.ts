import { Config } from '../config';
import { ServiceMixin } from '../mixin';
import { useI18n } from 'vue-i18n';
import type { AppConfig } from '@/config/app.config';

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

  private static preProcessArticle(article: string, locale: string) {
    let preProcessedArticle = article;
    preProcessedArticle = preProcessedArticle.replace('books/', `${locale}/stellarpedia/`);
    preProcessedArticle = preProcessedArticle.replace(`/${locale}.md`, '');
    return preProcessedArticle;
  }
}
