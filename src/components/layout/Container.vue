<script setup lang="ts">
import { VDivider, VSheet } from 'vuetify/components';
import Loader, { type LoaderType } from '../common/Loader.vue';
import type { ResourceState } from '@/reactivity/resource';
import type { Ref } from 'vue';
import { intl } from '@spuxx/browser-utils';

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
      {{ intl('error.content-load-failure') }}
    </span>
    <section v-else>
      <header v-if="title" :class="$style.header">
        <div :class="$style['header-row']">
          <h2>{{ title }}</h2>
          <slot name="header-append"></slot>
        </div>
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
  h2 {
    margin: 0;
    margin-right: 0.5rem;
  }

  hr {
    margin-top: 0.25rem;
    margin-bottom: 1rem;
  }
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.small {
  width: 500px;
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
