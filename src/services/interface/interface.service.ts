import { ref } from 'vue';
import { ServiceMixin } from '../mixin';

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
