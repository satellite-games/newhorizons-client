import { ServiceMixin, debug } from '@spuxx/browser-utils';
import type { DevelopmentOptions } from './types';
import { getBlueprints } from '../game-data-provider';
import type { CharacterOrigin, CharacterPreset } from '@newhorizons/core';
import { CharacterCreator } from '@/features/character-creation/services/character-creator';

/**
 * `Development` is a service that provides helper functions for development.
 * It can be configured via the `DEV_OPTIONS` property in the application configuration.
 */
export class Development extends ServiceMixin<Development>() {
  private _options: DevelopmentOptions = {};

  /**
   * Initializes the `Development` service with the given options.
   * @param options The options to initialize the service with.
   */
  static setup(options?: DevelopmentOptions) {
    this.instance._options = options ?? {};
    if (this.instance._options) debug(`Development options enabled: ${options}`, this.name);

    this.setupCharacterCreation();
  }

  static get options() {
    return this.instance._options;
  }

  static get enabled() {
    return !!this.instance._options;
  }

  private static async setupCharacterCreation() {
    const { INITIAL_CC_PROGRESS } = this.options;
    if (INITIAL_CC_PROGRESS === 'preset-locked' || INITIAL_CC_PROGRESS === 'origin-locked') {
      const characterPresets = await getBlueprints<CharacterPreset>('characterPresets');
      CharacterCreator.selectPreset(characterPresets[0]);
      CharacterCreator.startCreation();
    }
    if (INITIAL_CC_PROGRESS === 'origin-locked') {
      const characterOrigins = await getBlueprints<CharacterOrigin>('characterOrigins');
      CharacterCreator.chooseOrigin(characterOrigins[0], [], 'Solaire');
    }
  }
}
