<script setup lang="ts">
import { VMain } from 'vuetify/components';
</script>
<template>
  <VMain class="main-content">
    <div class="main-content-inner pa-2 pa-sm-4 pa-md-8">
      <slot></slot>
    </div>
  </VMain>
</template>

<style>
.main-content {
  max-width: 1440px;
  width: 100%;
  margin: auto;
  z-index: var(--z-index-main-content);
}

.main-content-inner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
