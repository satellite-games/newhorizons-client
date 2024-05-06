import { Blueprint } from '../base/blueprint';
import { GameObject } from '../base/game-object';

export class CharacterPresetBlueprint extends Blueprint {
  declare blueprintId: string;
  declare gpBonus: number;
  declare apAvailable: number;
  declare traitsMax: number;
  declare abilitiesMax: number;
  declare ipAvailable: number;
  declare epStart: number;
  declare crStart: number;
  declare fpStart: number;

  constructor(init: CharacterPresetBlueprint) {
    super();
    Object.assign(this, init);
  }
}
