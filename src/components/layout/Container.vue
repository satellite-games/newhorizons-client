<script setup lang="ts">
import { VSheet } from 'vuetify/components';

const props = defineProps<{
  size?: 'small' | 'medium' | 'large' | 'auto' | 'max';
}>();

const size = props.size || 'auto';
</script>

<template>
  <VSheet :class="['pa-4', 'pa-sm-6', 'pa-md-8', $style[size]]" rounded>
    <slot></slot>
  </VSheet>
</template>

<style module>
.small {
  width: 400px;
  max-width: 400px;
}

.medium {
  width: 700px;
  max-width: 700px;
}

.large {
  width: 1000px;
  max-width: 1000px;
}

.auto {
  width: auto;
}

.max {
  width: 100%;
}
</style>
