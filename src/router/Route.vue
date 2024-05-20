<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <slot name="sidebar"></slot>
  <VScrollXTransition hide-on-leave>
    <div :key="route.path" class="route-view pa-2 pa-sm-4 pa-md-8">
      <slot name="default"></slot>
    </div>
  </VScrollXTransition>
</template>

<style scoped>
.route-view {
  position: absolute;
  max-width: 100%;
  top: var(--v-layout-top);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
