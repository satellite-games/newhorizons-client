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
  // Replace article urls with correct local urls and remove filename
  // preProcessedText = preProcessedText.replace('<a href="/books/', `<a href="/stellarpedia/`);
  // preProcessedText = preProcessedText.replace(`/${Intl.currentLocale}.md`, '');
  // Replace various types of blocks
  preProcessedText = preProcessedText.replace(
    '> TIP ',
    `> <p class="blockquote-header">${intl('stellarpedia.block.tip')}</p>`,
  );
  return preProcessedText;
};
