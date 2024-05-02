import { marked } from 'marked';
import { ServiceMixin } from '../mixin';
import { sanitize } from 'isomorphic-dompurify';

export default class Markdown extends ServiceMixin<Markdown>() {
  public static async parse(markdown: string): Promise<string> {
    const html = await marked.parse(markdown);
    const sanitizedHtml = sanitize(html);
    return sanitizedHtml;
  }
}
