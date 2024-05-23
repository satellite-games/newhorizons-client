<script setup lang="ts">
import { useRoute } from 'vue-router';
import { VScrollXTransition } from 'vuetify/components';

defineProps<{
  title?: string;
}>();

const route = useRoute();
</script>

<template>
  <Teleport to="#main-content">
    <VScrollXTransition appear hide-on-leave>
      <div :key="route.path" class="content pa-2 pa-sm-4 pa-md-8">
        <header v-if="title" class="header">
          <h1>
            {{ title }}
          </h1>
          <hr />
        </header>
        <slot></slot>
      </div>
    </VScrollXTransition>
  </Teleport>
</template>

<style scoped>
.content {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  margin-bottom: 1rem;
  min-width: 50%;
  max-width: 100%;
  h1 {
    margin: 0;
    text-align: center;
  }

  hr {
    height: 2px;
    border: none;
    background-color: rgb(var(--v-border-color), var(--v-border-opacity));
    border-radius: 50%;
  }
}
</style>
