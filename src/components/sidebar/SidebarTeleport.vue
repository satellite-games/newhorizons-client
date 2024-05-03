<script setup lang="ts">
import { Teleport } from 'vue';
</script>

<template>
  <Teleport to="#sidebar-content">
    <slot />
  </Teleport>
</template>

<style>
#sidebar-content {
  .v-list-item-title {
    font-weight: bold;
    text-transform: uppercase;
  }
}
</style>
