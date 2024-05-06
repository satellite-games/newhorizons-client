import { marked } from 'marked';
import { sanitize } from 'isomorphic-dompurify';
import { ServiceMixin } from '@spuxx/browser-utils';

export default class Markdown extends ServiceMixin<Markdown>() {
  public static async parse(markdown: string): Promise<string> {
    const html = await marked.parse(markdown);
    const sanitizedHtml = sanitize(html);
    return sanitizedHtml;
  }
}
