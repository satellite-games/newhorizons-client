<script setup lang="ts">
import { VTabs } from 'vuetify/components';
import { useDisplay } from 'vuetify';
import AppNavigationTab from './AppNavigationTab.vue';
import { intl } from '@spuxx/browser-utils';

const { mobile } = useDisplay();
</script>
<template>
  <VTabs :direction="mobile ? 'vertical' : 'horizontal'">
    <!-- Invisible navigation tab to represent root -->
    <AppNavigationTab to="/" style="display: none" exact />
    <AppNavigationTab to="/home" icon="mdi:home" :title="intl('main.route.home.title')" />
    <AppNavigationTab
      to="/create-character"
      icon="mdi:account-plus"
      :title="intl('character-creation.title')"
    />
    <AppNavigationTab
      to="/stellarpedia"
      icon="mdi:weather-sunny"
      :title="intl('stellarpedia.title')"
    />
  </VTabs>
</template>
