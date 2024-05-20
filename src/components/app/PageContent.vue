<script setup lang="ts">
import { useRoute } from 'vue-router';
import { VScrollXTransition } from 'vuetify/components';

const route = useRoute();
</script>

<template>
  <Teleport to="#main-content">
    <VScrollXTransition appear hide-on-leave>
      <div id="page-content" :key="route.path" class="pa-2 pa-sm-4 pa-md-8">
        <slot></slot>
      </div>
    </VScrollXTransition>
  </Teleport>
</template>

<style>
#page-content {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
