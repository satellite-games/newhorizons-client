<script setup lang="ts">
import { VAppBar, VBtn, VDivider } from 'vuetify/components';
import AppLogo from '@/components/app/AppLogo.vue';
import { Icon } from '@iconify/vue';
import AppNavigation from '../navigation/AppNavigation.vue';
import { Interface } from '@/services/interface';
import { useDisplay } from 'vuetify';

const { mobile } = useDisplay();
const toggleSidebar = Interface.togglesidebar;
</script>
<template>
  <VAppBar class="header">
    <template v-slot:prepend>
      <VBtn icon variant="text" :onclick="toggleSidebar">
        <Icon icon="mdi:menu" class="icon" />
      </VBtn>
      <p class="title">{{ $t('app.title') }}</p>
      <AppLogo class="logo" :size="40" />
      <VDivider vertical v-if="!mobile" />
    </template>
    <template v-slot:title v-if="!mobile">
      <AppNavigation />
    </template>
    <template v-slot:append>
      <!-- <VDivider vertical /> -->
      <VBtn icon variant="text" :title="$t('app.placeholder')">
        <Icon icon="mdi:account" />
      </VBtn>
    </template>
  </VAppBar>
</template>

<style scoped>
.header :global(.v-toolbar__prepend .v-divider) {
  margin-left: 16px;
}

.header :global(.v-divider) {
  height: 60%;
  margin: auto 0.25rem;
}

.brand {
  height: unset;
}

.logo {
  margin-left: 10px;
}

.title {
  margin-left: 0.5rem;
  font-size: larger;
}
</style>
