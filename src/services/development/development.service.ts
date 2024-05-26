import { ServiceMixin, debug } from '@spuxx/browser-utils';
import type { DevelopmentOptions } from './types';
import {
  CharacterCreationProgress,
  CharacterCreator,
} from '@/features/character-creation/services/character-creator';
import { getBlueprints } from '../game-data-provider';
import { CharacterPreset } from '@newhorizons/core';

/**
 * `Development` is a service that provides helper functions for development.
 * It can be configured via the `DEV_OPTIONS` property in the application configuration.
 */
export class Development extends ServiceMixin<Development>() {
  private _options?: DevelopmentOptions;

  /**
   * Initializes the `Development` service with the given options.
   * @param options The options to initialize the service with.
   */
  static setup(options?: DevelopmentOptions) {
    this.instance._options = options;
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
    const { INITIAL_CC_PROGRESS } = { INITIAL_CC_PROGRESS: 0, ...this.options };
    if (INITIAL_CC_PROGRESS >= CharacterCreationProgress.presetSelected) {
      const characterPresets = await getBlueprints<CharacterPreset>('characterPresets');
      CharacterCreator.setPreset(characterPresets[0]);
      CharacterCreator.start();
    }
    if (INITIAL_CC_PROGRESS >= CharacterCreationProgress.originSelected) {
      // CharacterCreator.setProgress(CharacterCreationProgress.characterCreated);
    }
  }
}
