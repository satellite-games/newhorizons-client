import { ServiceMixin, debug, intl } from '@spuxx/browser-utils';
import { ref } from 'vue';
import { CharacterCreationProgress } from './types';
import {
  Character,
  CharacterCreationContext,
  CharacterPreset,
  type Blueprint,
} from '@newhorizons/core';

/**
 * `CharacterCreator` is responsible for managing the character creation process.
 */
export class CharacterCreator extends ServiceMixin<CharacterCreator>() {
  private _progress = ref<CharacterCreationProgress>(CharacterCreationProgress.initial);
  private _context = ref<CharacterCreationContext | null>(null);

  /**
   * Starts the character creation process.
   */
  static start(preset: Blueprint<CharacterPreset>) {
    const context = new CharacterCreationContext(new CharacterPreset(preset));
    this.instance._context.value = context;
    const { character } = context;
    character.general.name = intl('character-creation.default-character-name');
    this.setProgress(CharacterCreationProgress.presetSelected);
    debug(`Character creation started for character ${character.id}.`, this.name);
  }

  static get progress() {
    return this.instance._progress.value;
  }

  static get context(): CharacterCreationContext | null {
    return this.instance._context.value;
  }

  static get preset(): CharacterPreset | undefined {
    return this.context?.preset;
  }

  static get character(): Character | undefined {
    return this.context?.character;
  }

  /**
   * Indicates whether the character creation process is currently in progress.
   */
  static get creationInProgress() {
    return this.progress !== CharacterCreationProgress.initial;
  }

  /**
   * Resets the character creation process. All progress will be lost.
   */
  static async reset() {
    this.instance._progress.value = CharacterCreationProgress.initial;
    this.instance._context.value = null;
    debug('Character creation reset.', this.name);
  }

  static setProgress(progress: CharacterCreationProgress) {
    this.instance._progress.value = progress;
  }
}
