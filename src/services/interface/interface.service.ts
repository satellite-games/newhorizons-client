import { ServiceMixin } from '@spuxx/browser-utils';
import { ref, type Ref } from 'vue';

export class Interface extends ServiceMixin<Interface>() {
  private _sidebarExpanded = ref(false);
  private _sidebarEnabled = ref(false);

  static toggleSidebar() {
    const newValue = !Interface.instance._sidebarExpanded.value;
    Interface.instance._sidebarExpanded.value = newValue;
  }

  static get sidebarExpanded(): Ref<boolean> {
    return this.sidebarEnabled.value ? this.instance._sidebarExpanded : this.sidebarEnabled;
  }

  static setSidebarExpanded(open: boolean) {
    Interface.instance._sidebarExpanded.value = open;
  }

  static get sidebarEnabled(): Ref<boolean> {
    return this.instance._sidebarEnabled;
  }

  static setSidebarEnabled(value: boolean) {
    Interface.instance._sidebarEnabled.value = value;
  }
}
