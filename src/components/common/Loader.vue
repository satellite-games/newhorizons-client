<script setup lang="ts">
import type { Resource } from '@/reactivity/resource';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { VSkeletonLoader } from 'vuetify/components';
export type LoaderType = VProps<typeof VSkeletonLoader>['type'] | 'spinner';

const props = defineProps<{
  resource?: Resource<object>;
  type?: LoaderType;
}>();
const { state, type } = {
  state: props.resource?.state.value ?? 'pending',
  type: props.type ?? 'spinner',
};
</script>
<template>
  <span v-if="state === 'pending'" :class="$style.loader" :aria-label="$t('misc.loading')">
    <Icon v-if="type === 'spinner'" :class="$style.spinner" icon="svg-spinners:270-ring" />
    <VSkeletonLoader v-else :type="type" />
  </span>
</template>
<style module>
.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.spinner {
  font-size: x-large;
}
</style>
