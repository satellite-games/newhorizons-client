import { Config } from '@spuxx/browser-utils';
import { appConfig, type AppConfig } from './config/app.config';

Config.setup<AppConfig>({ defaultConfig: appConfig });
