<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';

const props = defineProps<{
  book: string;
  chapter: string;
  article: string;
}>();

const share = () => {
  console.log('Share');
};
</script>
<template>
  <div :class="$style.toolbar" role="toolbar">
    <p :class="[$style.breadcrumps, 'v-btn--variant-plain']">
      {{ props.book }} / {{ props.chapter }} / {{ props.article }}
    </p>
    <VBtn icon variant="plain" :onclick="share">
      <Icon icon="mdi:share" class="icon" />
    </VBtn>
  </div>
</template>

<style module>
.toolbar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.breadcrumps {
  font-size: smaller;
  color: rgb(var(--v-theme-plain));
  /* opacity: var(--v-disabled-opacity); */
}
</style>
