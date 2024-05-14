import { ServiceMixin } from '@spuxx/browser-utils';
import { ref, watch } from 'vue';
import { useRoute, type RouteRecordName } from 'vue-router';

export class Interface extends ServiceMixin<Interface>() {
  private _sidebarExpanded = ref(false);
  private _sidebarDisabled = ref(false);

  constructor() {
    super();
    const route = useRoute();
    watch(route, () => {
      const routesWithoutSidebar: Array<RouteRecordName | null | undefined> = ['/'];
      this._sidebarDisabled.value = routesWithoutSidebar.includes(route.path);
      if (this._sidebarDisabled.value) Interface.setSidebarExpanded(false);
    });
  }

  static get sidebarExpanded() {
    return Interface.instance._sidebarExpanded;
  }

  static toggleSidebar() {
    const newValue = !Interface.instance._sidebarExpanded.value;
    if (newValue && this.sidebarDisabled) return;
    Interface.instance._sidebarExpanded.value = newValue;
  }

  static setSidebarExpanded(open: boolean) {
    if (open && this.sidebarDisabled) return;
    Interface.instance._sidebarExpanded.value = open;
  }

  static get sidebarDisabled() {
    return this.instance._sidebarDisabled;
  }
}
