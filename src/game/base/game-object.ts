import { randomUUID } from 'crypto';
import { Blueprint } from './blueprint';

/**
 * The `GameObject` base class represents instanced objects. All `GameObject`s
 * extend a `Blueprint` and represent its non-abstract representation.
 */
export class GameObject extends Blueprint {
  /**
   * The unique identifier of the game object.
   */
  id: string;

  constructor(init: { id?: string; blueprintId: string }) {
    super(init);
    this.id = init.id ?? randomUUID();
  }
}
