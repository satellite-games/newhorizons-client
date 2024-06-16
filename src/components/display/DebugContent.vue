<script setup lang="ts">
import type { AppConfig } from '@/config/app.config';
import { Icon } from '@iconify/vue';
import { Config } from '@spuxx/browser-utils';
import { VExpansionPanel, VExpansionPanels } from 'vuetify/components';

const display = Config.getConfig<AppConfig>().LOG_LEVEL === 'debug';
</script>

<template>
  <VExpansionPanels variant="popout">
    <VExpansionPanel v-if="display" class="debug-content" elevation="24">
      <template v-slot:title>
        <h3 class="header">
          <Icon class="icon" icon="mdi:code"></Icon>
          Debug
        </h3>
      </template>
      <template v-slot:text>
        <pre><slot></slot></pre>
      </template>
    </VExpansionPanel>
  </VExpansionPanels>
</template>

<style scoped>
.debug-content {
  min-width: 10rem;
  width: fit-content;
  /* max-width: 100%; */
  padding: 0.5rem;
  margin: 1rem;
  border-radius: var(--v-border-radius);
  background: linear-gradient(
    90deg,
    rgb(var(--v-theme-primary), 0.5),
    rgb(var(--v-theme-accent), 0.5)
  );
  font-family: monospace;
}

.header {
  margin: 0;
  display: flex;
}

.icon {
  margin-right: 0.5rem;
}
</style>
