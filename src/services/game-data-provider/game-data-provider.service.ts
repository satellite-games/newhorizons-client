/* eslint-disable @typescript-eslint/no-explicit-any */
import { ServiceMixin } from '@spuxx/browser-utils';
import { GameObject, type Blueprint } from '@newhorizons/core';
import * as core from '@newhorizons/core';

/**
 * `GameDataProvider` is a service that provides access to all game data.
 * Once any collection of game data is loaded, it is cached and can be accessed instantly.
 */
export class GameDataProvider extends ServiceMixin<GameDataProvider>() {
  /**
   * Loads and returns the collection of blueprints with the given name.
   * @param collectionName The name of the collection to load.
   */
  static getBlueprints = async <TGameObject extends GameObject>(
    collection: keyof typeof core,
  ): Promise<Blueprint<TGameObject>[]> => {
    return core[collection] as unknown as Blueprint<TGameObject>[];
  };
}

export const { getBlueprints } = GameDataProvider;
