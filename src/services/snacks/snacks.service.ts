import { ServiceMixin } from '@spuxx/browser-utils';
import type { Snack } from './types';
import { reactive } from 'vue';

/**
 * A service for managing snacks. Snacks can be used to display messages to the user,
 * such as success messages, error messages, or warnings.
 */
export class Snacks extends ServiceMixin<Snacks>() {
  private _snacks = reactive<Snack[]>([]);

  /**
   * Adds a snack to the list of snacks.
   * @param snack The snack to add.
   */
  static add(snack: Snack) {
    const newSnack: Snack = { id: crypto.randomUUID(), timeout: 5000, visible: true, ...snack };
    this.instance._snacks.push(newSnack);
    setTimeout(() => this.remove(newSnack.id!), newSnack.timeout);
  }

  /**
   * Removes a snack from the list of snacks.
   * @param id The ID of the snack to remove.
   */
  static remove(id: string) {
    const index = this.instance._snacks.findIndex((snack) => snack.id === id);
    if (index !== -1) {
      this.instance._snacks.splice(index, 1);
    }
  }

  /**
   * Returns all snacks.
   */
  static get snacks() {
    return this.instance._snacks;
  }
}
