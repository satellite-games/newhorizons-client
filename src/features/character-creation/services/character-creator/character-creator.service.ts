import { ServiceMixin } from '@spuxx/browser-utils';
import { ref } from 'vue';
import { type CharacterCreationProgress } from './types';

/**
 * `CharacterCreator` is responsible for managing the character creation process.
 */
export class CharacterCreator extends ServiceMixin<CharacterCreator>() {
  progress = ref<CharacterCreationProgress>(null);

  /**
   * Indicates whether the character creation process is currently in progress.
   */
  static get creationInProgress() {
    return false;
  }
}
