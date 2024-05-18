<script setup lang="ts">
import { VDivider, VSheet } from 'vuetify/components';
import Loader, { type LoaderType } from '../common/Loader.vue';
import type { Resource, ResourceState } from '@/reactivity/resource';
import type { Ref } from 'vue';

const props = defineProps<{
  title?: string;
  size?: 'small' | 'medium' | 'large' | 'auto' | 'max';
  color?: string;
  elevation?: string;
  state?: Ref<ResourceState>;
  loaderType?: LoaderType;
}>();

const size = props.size || 'auto';
const elevation = props.elevation ?? 10;
</script>

<template>
  <VSheet
    :class="[$style.container, 'pa-4', 'pa-sm-6', 'pa-md-8', $style[size]]"
    :elevation
    :color
    rounded
  >
    <Loader v-if="state && state.value === 'pending'" :state :type="loaderType" />
    <span v-else-if="state && state.value === 'failed'">
      {{ $t('error.content-load-failure') }}
    </span>
    <section v-else>
      <header v-if="title" :class="$style.header">
        <h2>{{ title }}</h2>
        <VDivider />
      </header>
      <slot></slot>
    </section>
  </VSheet>
</template>

<style module>
.container {
  max-width: 100%;
  background: rgba(var(--v-theme-surface), var(--v-container-overlay-multiplier));
}

.header {
  > h2 {
    margin: 0;
  }

  > hr {
    margin-top: 0.25rem;
    margin-bottom: 1rem;
  }
}

.small {
  width: 400px;
}

.medium {
  width: 700px;
}

.large {
  width: 1000px;
}

.auto {
  width: auto;
}

.max {
  width: 100%;
}
</style>
