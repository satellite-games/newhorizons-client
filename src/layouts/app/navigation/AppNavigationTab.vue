<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';
import { VTab } from 'vuetify/components';

const { to, icon, title, exact } = defineProps<{
  to: string;
  icon?: string;
  title?: string;
  exact?: boolean;
}>();
</script>

<template>
  <VTab :to="to" :exact="exact">
    <template v-slot:prepend>
      <Icon v-if="icon" :icon="icon" />
    </template>
    {{ title }}
  </VTab>
</template>
