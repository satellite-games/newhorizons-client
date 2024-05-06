import GameObject from '../base/game-object';
import CharacterPresetBlueprint from '../character-features/character-preset';

export default class Character extends GameObject {
  gameVersion: string;

  constructor(options: { gameVersion: string; characterPreset: CharacterPresetBlueprint }) {
    super();
    this.gameVersion = options.gameVersion;
  }
}
