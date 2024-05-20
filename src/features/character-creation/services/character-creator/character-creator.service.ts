import { ServiceMixin, debug } from '@spuxx/browser-utils';
import { ref } from 'vue';
import { CharacterCreationProgress } from './types';
import { Character, CharacterPreset, createNewCharacter, type Blueprint } from '@newhorizons/core';

/**
 * `CharacterCreator` is responsible for managing the character creation process.
 */
export class CharacterCreator extends ServiceMixin<CharacterCreator>() {
  private _progress = ref<CharacterCreationProgress>('initial');
  private _preset = ref<Blueprint<CharacterPreset> | null>(null);
  private _character = ref<Character | null>(null);

  /**
   * Starts the character creation process.
   */
  static start() {
    const character = createNewCharacter();
    this.instance._character.value = character;
    debug(`Character creation started for character ${character.id}.`, this.name);
  }

  static get progress() {
    return this.instance._progress.value;
  }

  static get preset() {
    return this.instance._preset.value;
  }

  static get character() {
    return this.instance._character.value;
  }

  /**
   * Indicates whether the character creation process is currently in progress.
   */
  static get creationInProgress() {
    return this.character !== null;
  }

  /**
   * Resets the character creation process. All progress will be lost.
   */
  static async reset() {
    this.instance._progress.value = 'initial';
    this.instance._preset.value = null;
    this.instance._character.value = null;
    debug('Character creation reset.', this.name);
  }

  static setProgress(progress: CharacterCreationProgress) {
    this.instance._progress.value = progress;
  }

  /**
   * Sets the preset for the character creation process.
   * @param preset The preset to set.
   */
  static setPreset(preset: Blueprint<CharacterPreset>) {
    this.instance._preset.value = preset;
    this.setProgress('pre-origin');
    debug(`Character preset set to '${preset.name}'.`, this.name);
  }
}
