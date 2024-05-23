<script setup lang="ts">
import type { AppConfig } from '@/config/app.config';
import { Icon } from '@iconify/vue';
import { Config } from '@spuxx/browser-utils';
import { VCard } from 'vuetify/components';

const display = Config.getConfig<AppConfig>().LOG_LEVEL === 'debug';
</script>

<template>
  <VCard v-if="display" class="debug-content" elevation="24">
    <p class="header">
      <Icon class="icon" icon="mdi:code"></Icon>
      Debug
    </p>
    <slot></slot>
  </VCard>
</template>

<style scoped>
.debug-content {
  min-width: 10rem;
  padding: 0.5rem;
  margin: 1rem;
  border-radius: var(--v-border-radius);
  background-color: rgb(var(--v-theme-warning), 0.5);
  font-family: monospace;
}

.header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(var(--v-border-color), var(--v-border-opacity));
  margin-bottom: 0.5rem;
}

.icon {
  margin-right: 0.5rem;
}
</style>
