<script setup lang="ts">
import { VDivider, VNavigationDrawer } from 'vuetify/components';
import { Interface } from '@/services/interface';
import { useDisplay } from 'vuetify';
import AppNavigation from '../navigation/AppNavigation.vue';

const { mobile } = useDisplay();
</script>

<template>
  <VNavigationDrawer id="sidebar" v-model="Interface.sidebarExpanded.value" :width="350">
    <div v-if="mobile">
      <AppNavigation />
      <VDivider />
    </div>
    <div id="sidebar-content"></div>
    <slot />
  </VNavigationDrawer>
</template>

<style>
#sidebar {
  .v-list-item__prepend {
    margin-right: 0.5rem;
  }

  .v-list-item-title {
    white-space: unset;
  }
}
</style>
