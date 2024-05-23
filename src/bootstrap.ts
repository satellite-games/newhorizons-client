import { Config, Intl, Logger } from '@spuxx/browser-utils';
import { appConfig, type AppConfig } from './config/app.config';
import deApplication from '@/assets/locales/de.yaml';
import { de as deBlueprints } from '@newhorizons/core/locales';
import { de as deWiki } from '@newhorizons/wiki/locales';

Config.setup<AppConfig>({ defaultConfig: appConfig });
Logger.setLevel(Config.getConfig<AppConfig>().LOG_LEVEL);

const de = { ...deApplication, ...deBlueprints, ...deWiki };
Intl.setup({
  fallbackLocale: Config.getConfig<AppConfig>().DEFAULT_LOCALE,
  dictionaries: [
    {
      locale: 'de',
      values: de,
    },
  ],
});
