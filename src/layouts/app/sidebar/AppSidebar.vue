<script setup lang="ts">
import { VDivider, VNavigationDrawer } from 'vuetify/components';
import { Interface } from '@/services/interface';
import { useDisplay } from 'vuetify';
import AppNavigation from '../navigation/AppNavigation.vue';
import { useRoute, type RouteLocationNormalizedLoaded, type RouteRecordName } from 'vue-router';
import { watch } from 'vue';

const { mobile } = useDisplay();
const route = useRoute();

/**
 * Watches the route and display for changes and updates the sidebar accordingly.
 */
const watchRouteAndMobile = ([route, mobile]: [RouteLocationNormalizedLoaded, boolean]) => {
  if (mobile) {
    // Never disable the sidebar on mobile devices.
    Interface.setSidebarEnabled(true);
  } else {
    // Disable the sidebar on routes that don't need it.
    const routesWithoutSidebar: Array<RouteRecordName | null | undefined> = ['/'];
    Interface.setSidebarEnabled(!routesWithoutSidebar.includes(route.path));
  }
};
watch([route, mobile], watchRouteAndMobile);
</script>

<template>
  <VNavigationDrawer
    id="sidebar"
    v-model="Interface.sidebarExpanded.value"
    width="350"
    :disable-resize-watcher="true"
  >
    <div v-if="mobile">
      <AppNavigation />
      <VDivider />
    </div>
    <div id="sidebar-content"></div>
    <slot></slot>
  </VNavigationDrawer>
</template>

<style>
#sidebar {
  .v-list-item__prepend {
    margin-right: 0.5rem;
  }

  .v-list-item-title,
  .v-list-item__content {
    white-space: unset;
  }
}
</style>
