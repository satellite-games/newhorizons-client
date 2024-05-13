<script setup lang="ts">
import { VSheet } from 'vuetify/components';
import Loader, { type LoaderType } from '../common/Loader.vue';

const props = defineProps<{
  size?: 'small' | 'medium' | 'large' | 'auto' | 'max';
  state?: Resource;
  loaderType: LoaderType;
}>();

const size = props.size || 'auto';
</script>

<template>
  <VSheet :class="['pa-4', 'pa-sm-6', 'pa-md-8', $style[size]]" rounded>
    <Loader v-if="state === null || state === 'pending'" :type="loaderType" />
    <span v-else-if="state === 'failed'">
      {{ $t('error.content-load-failure') }}
    </span>
    <section v-else>
      <slot></slot>
    </section>
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
