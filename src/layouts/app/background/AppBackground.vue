<script setup lang="ts">
import AppBackgroundParticles from './AppBackgroundParticles.vue';
import AppBackgroundSlideshow from './AppBackgroundSlideshow.vue';
</script>

<template>
  <span id="app-background">
    <AppBackgroundSlideshow />
    <AppBackgroundParticles />
  </span>
</template>

<style>
#app-background {
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  pointer-events: none;
  z-index: var(--z-index-app-background);
}
</style>
