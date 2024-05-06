/**
 * The `Blueprint` class is the base class for all `GameObject` blueprints.
 */
export class Blueprint {
  /**
   * The unique identifier of the blueprint.
   */
  blueprintId: string;

  constructor(init: Blueprint) {
    this.blueprintId = init.blueprintId;
  }
}
