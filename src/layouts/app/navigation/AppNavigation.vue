<script setup lang="ts">
import { VTabs } from 'vuetify/components';
import { useDisplay } from 'vuetify';
import AppNavigationTab from './AppNavigationTab.vue';

const { mobile } = useDisplay();
</script>
<template>
  <VTabs :direction="mobile ? 'vertical' : 'horizontal'">
    <AppNavigationTab to="/home" icon="mdi:home" :title="$t('route.home.title')" />
    <AppNavigationTab
      to="/create-character"
      icon="mdi:account-plus"
      :title="$t('route.create-character.title')"
    />
    <AppNavigationTab
      to="/stellarpedia"
      icon="mdi:weather-sunny"
      :title="$t('route.stellarpedia.title')"
    />
  </VTabs>
</template>
