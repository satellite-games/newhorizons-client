import { Config } from './services/config';
import { appConfig, type AppConfig } from './config/app.config';

Config.setup<AppConfig>({ defaultConfig: appConfig });
