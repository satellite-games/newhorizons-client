<script setup lang="ts">
import { VDivider, VSheet } from 'vuetify/components';
import Loader, { type LoaderType } from '../common/Loader.vue';

const props = defineProps<{
  title?: string;
  size?: 'small' | 'medium' | 'large' | 'auto' | 'max';
  state?: Resource;
  loaderType: LoaderType;
}>();

const size = props.size || 'auto';
</script>

<template>
  <VSheet :class="[$style.container, 'pa-4', 'pa-sm-6', 'pa-md-8', $style[size]]" rounded>
    <Loader v-if="state === null || state === 'pending'" :type="loaderType" />
    <span v-else-if="state === 'failed'">
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
