import type { LogLevel } from '@spuxx/browser-utils';

export interface AppConfig {
  STELLARPEDIA_BASE_URL: string;
  LOG_LEVEL: LogLevel;
}

export const appConfig: AppConfig = {
  STELLARPEDIA_BASE_URL:
    'https://raw.githubusercontent.com/satellite-games/new-horizons-wiki/main/books',
  LOG_LEVEL: 'debug',
};
