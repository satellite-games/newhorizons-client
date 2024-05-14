import { Config, Logger } from '@spuxx/browser-utils';
import { appConfig, type AppConfig } from './config/app.config';

Config.setup<AppConfig>({ defaultConfig: appConfig });
Logger.setLevel(Config.getConfig<AppConfig>().LOG_LEVEL);
