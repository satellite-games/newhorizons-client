import { ServiceMixin } from '@spuxx/browser-utils';
import { ref } from 'vue';

export class Dialog extends ServiceMixin<Dialog>() {
  private _isActive = ref<boolean>(false);

  public static open() {
    this.instance._isActive.value = true;
  }

  public static get isActive() {
    return this.instance._isActive.value;
  }
}
