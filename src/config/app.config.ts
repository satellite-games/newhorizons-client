import type { DevelopmentOptions } from '@/services/development';
import type { LogLevel } from '@spuxx/browser-utils';

export interface AppConfig {
  /**
   * The default locale of the application.
   */
  DEFAULT_LOCALE: string;
  /**
   * The base URL of the Stellarpedia.
   */
  STELLARPEDIA_BASE_URL: string;
  /**
   * The log level of the application.
   */
  LOG_LEVEL: LogLevel;
  /**
   * May be used to enable specific options that make development easier.
   */
  DEV_OPTIONS?: DevelopmentOptions;
}

export const appConfig: AppConfig = {
  DEFAULT_LOCALE: 'de',
  STELLARPEDIA_BASE_URL:
    'https://raw.githubusercontent.com/satellite-games/new-horizons-wiki/main/books',
  LOG_LEVEL: 'debug',
  DEV_OPTIONS: {
    INITIAL_CC_PROGRESS: 'origin-locked',
  },
};
