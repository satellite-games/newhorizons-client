/* eslint-disable @typescript-eslint/no-explicit-any */
import { ServiceMixin } from '@spuxx/browser-utils';
import {
  GameObject,
  type Saved,
  type Blueprint,
  type BlueprintCollectionRegistry,
  type BlueprintCollectionName,
  CharacterPreset,
} from '@newhorizons/core';

/**
 * `GameDataProvider` is a service that provides access to all game data.
 * Once any collection of game data is loaded, it is cached and can be accessed instantly.
 */
export class GameDataProvider extends ServiceMixin<GameDataProvider>() {
  private _store: Partial<BlueprintCollectionRegistry> = {};

  /**
   * Loads and returns the collection of blueprints with the given name.
   * @param collectionName The name of the collection to load.
   */
  static getBlueprints = async <TGameObject extends GameObject>(
    collectionName: BlueprintCollectionName,
  ): Promise<Blueprint<TGameObject>[]> => {
    if (!this.instance._store[collectionName]) {
      switch (collectionName) {
        case 'character/preset': {
          const { characterPresets } = await import('./plugins/character/preset');
          return characterPresets as unknown as Blueprint<TGameObject>[];
        }
        default:
          throw new Error(`Blueprint collection '${collectionName}' not found.`);
      }
    }
    return this.instance._store[collectionName] as unknown as Blueprint<TGameObject>[];
  };
}

export const { getBlueprints } = GameDataProvider;
