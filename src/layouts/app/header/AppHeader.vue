<script setup lang="ts">
import { VAppBar, VBtn, VDivider } from 'vuetify/components';
import AppLogo from '@/components/app/AppLogo.vue';
import { Icon } from '@iconify/vue';
import AppNavigation from '../navigation/AppNavigation.vue';
import { Interface } from '@/services/interface';
import { useDisplay } from 'vuetify';
import { RouterLink } from 'vue-router';

const { mobile } = useDisplay();
const { toggleSidebar, sidebarDisabled } = Interface;
console.log(sidebarDisabled);
</script>
<template>
  <VAppBar :class="$style.header">
    <template v-slot:prepend>
      <RouterLink :class="$style.brand" to="/">
        <AppLogo :class="$style.logo" :size="40" />
        <p :class="$style.title">{{ $t('app.title') }}</p>
      </RouterLink>
      <VBtn
        v-if="!sidebarDisabled"
        :class="$style['sidebar-toggle']"
        icon
        variant="text"
        :onclick="toggleSidebar"
      >
        <Icon icon="mdi:menu" />
      </VBtn>
      <VDivider vertical v-if="!mobile" />
    </template>
    <template v-slot:title v-if="!mobile">
      <AppNavigation />
    </template>
    <template v-slot:append>
      <VBtn icon variant="text" :title="$t('app.placeholder')">
        <Icon icon="mdi:account" />
      </VBtn>
    </template>
  </VAppBar>
</template>

<style module>
.header :global(.v-toolbar__prepend .v-divider) {
  margin-left: 16px;
}

.header :global(.v-divider) {
  height: 60%;
  margin: auto 0.25rem;
}

.brand {
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
}

.title {
  margin-left: 0.5rem;
  font-size: larger;
}

.sidebar-toggle {
  margin-left: 0.5rem;
}
</style>
