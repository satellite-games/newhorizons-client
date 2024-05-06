import { ServiceMixin } from '@spuxx/browser-utils';
import { ref } from 'vue';

export class Interface extends ServiceMixin<Interface>() {
  _sidebarExpanded = ref(false);

  static get sidebarExpanded() {
    return Interface.instance._sidebarExpanded;
  }

  static togglesidebar() {
    Interface.instance._sidebarExpanded.value = !Interface.instance._sidebarExpanded.value;
  }

  static setSidebarExpanded(open: boolean) {
    Interface.instance._sidebarExpanded.value = open;
  }
}
