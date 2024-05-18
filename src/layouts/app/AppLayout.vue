<script setup lang="ts">
import { useDisplay } from 'vuetify';
import AppBackground from './background/AppBackground.vue';
import AppHeader from './header/AppHeader.vue';
import AppMainContent from './main-content/AppMainContent.vue';
import AppSidebar from './sidebar/AppSidebar.vue';
import AppModal from './modal/AppModal.vue';

const { mobile } = useDisplay();
const renderBackground = !mobile.value;
</script>

<template>
  <AppBackground v-if="renderBackground" />
  <AppHeader />
  <AppSidebar />
  <AppModal />
  <AppMainContent>
    <slot></slot>
  </AppMainContent>
</template>
