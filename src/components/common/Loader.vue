<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';
import { VSkeletonLoader } from 'vuetify/components';
export type LoaderType = VProps<typeof VSkeletonLoader>['type'] | 'spinner';

const props = defineProps<{
  state?: Resource;
  type?: LoaderType;
}>();
const { state, type } = { state: props.state ?? 'pending', type: props.type ?? 'spinner' };
</script>
<template>
  <div :class="$style.loader" :aria-label="$t('misc.loading')">
    <span v-if="state === null || state === 'pending'">
      <Icon v-if="type === 'spinner'" :class="$style.spinner" icon="svg-spinners:270-ring" />
      <VSkeletonLoader v-else :type />
    </span>
  </div>
</template>
<style module>
.loader {
  display: flex;
  justify-content: center;
}
.spinner {
  font-size: x-large;
}
</style>
