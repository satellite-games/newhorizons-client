import { intl } from '@spuxx/browser-utils';

/**
 * Post-processes the article text.
 * @param text The article text.
 * @returns The post-processed article text.
 */
export const postProcessArticle = (text: string) => {
  let preProcessedText = text;
  // Replace partial image urls will full urls
  preProcessedText = preProcessedText.replace('<img ', `<img class="v-card--variant-elevated "`);
  // Replace <a> tags with <router-link> tags
  const linkPattern = /(<a).*?(href=)["|'][^"]+["|'].*?[^<]+(<\/a>)/g;
  const linkMatches = preProcessedText.matchAll(linkPattern);
  for (const match of linkMatches) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, startTag, href, endTag] = match;
    if (!startTag || !href || !endTag) continue;
    preProcessedText = preProcessedText.replace(startTag, '<router-link');
    preProcessedText = preProcessedText.replace(href, 'to=');
    preProcessedText = preProcessedText.replace(endTag, '</router-link>');
  }

  preProcessedText = preProcessedText.replace(
    /<a.*?href=["|']([^"]+)["|'].*?([^<]+)<\/a>/g,
    '<router-link :to="$1"$2</router-link>',
  );
  // Replace various types of blocks
  preProcessedText = preProcessedText.replace(
    '> TIP ',
    `> <p class="blockquote-header">${intl('stellarpedia.block.tip')}</p>`,
  );
  return preProcessedText;
};
