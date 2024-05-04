<script setup lang="ts">
import { VMain } from 'vuetify/components';
</script>
<template>
  <VMain class="main-content">
    <div class="pa-2 pa-sm-4 pa-md-8">
      <slot></slot>
    </div>
  </VMain>
</template>

<style>
.main-content {
  max-width: 1440px;
  width: 100%;
  margin: auto;
}
</style>
