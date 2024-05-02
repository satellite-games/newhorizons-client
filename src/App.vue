<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppLayout from '@/layouts/app/AppLayout.vue';
import { VApp } from 'vuetify/components';
</script>

<template>
  <VApp>
    <AppLayout>
      <RouterView />
    </AppLayout>
  </VApp>
</template>
