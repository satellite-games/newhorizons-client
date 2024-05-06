import { ServiceMixin } from '@spuxx/browser-utils';

/**
 * `CharacterCreator` is responsible for managing the character creation process.
 */
export class CharacterCreator extends ServiceMixin<CharacterCreator>() {
  /**
   * Indicates whether the character creation process is currently in progress.
   */
  get creationInProcess() {
    return false;
  }
}
