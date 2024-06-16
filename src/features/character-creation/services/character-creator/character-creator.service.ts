import { ServiceMixin, debug, intl } from '@spuxx/browser-utils';
import { ref } from 'vue';
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
  private _selectedPreset = ref<CharacterPreset | undefined>(undefined);
  private _context = ref<CharacterCreationContext | null>(null);

  /**
   * Selects a preset for the character creation process. This will reset the current context.
   * @param preset The preset to select.
   */
  static selectPreset(preset: Blueprint<CharacterPreset>) {
    this.instance._selectedPreset.value = new CharacterPreset(preset);
    this.instance._context.value = null;
  }

  /**
   * Starts the character creation process.
   */
  static startCreation() {
    const preset = this.instance._selectedPreset.value;
    if (!preset) throw new Error('Select a preset before starting the character creation process.');
    const context = new CharacterCreationContext(preset);
    this.instance._context.value = context;
    const { character } = context;
    character.general.name = intl('character-creation.default-character-name');
    debug(`Character creation started for character ${character.id}.`, this.name);
  }

  /**
   * Resets the character creation process. Does not reset the selected preset.
   */
  static reset() {
    this.instance._context.value = null;
  }

  static get preset(): CharacterPreset | undefined {
    return this.instance._context.value
      ? this.instance._context.value.preset
      : this.instance._selectedPreset.value;
  }

  static get character(): Character | undefined {
    return this.instance._context.value?.character;
  }

  static get presetLocked() {
    return !!this.instance._context.value;
  }

  static get originLocked() {
    return !!this.instance._context.value?.character.general.originName;
  }
}
