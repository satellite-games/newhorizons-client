<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';
import { VBtn } from 'vuetify/components';

const props = defineProps<{
  color: Color;
  disabled?: boolean;
  value: number;
  icon: string;
  title: string;
  onClick: (value: number) => void;
}>();

const handleClick = () => {
  props.onClick(props.value);
};
</script>

<template>
  <VBtn
    class="button"
    variant="text"
    :disabled
    :color
    :style="{
      backgroundColor: `rgb(var(--v-theme-${color})) !important`,
      color: `rgb(var(--v-theme-on-${color})) !important`,
    }"
    :title
    :aria-label="title"
    @click="handleClick"
  >
    <Icon :icon />
  </VBtn>
</template>

<style scoped>
.button {
  height: 56px;
  transition: opacity 0s;
}

.button.v-btn--disabled {
  opacity: var(--v-disabled-opacity);
}

.button:first-of-type {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.button:last-of-type {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
