<script setup lang="ts">
import { useDisplay } from 'vuetify';
import AppBackground from './background/AppBackground.vue';
import AppHeader from './header/AppHeader.vue';
import AppMainContent from './main-content/AppMainContent.vue';
import AppSidebar from './sidebar/AppSidebar.vue';
import AppModal from './modal/AppModal.vue';
import AppSnacks from './snacks/AppSnacks.vue';

const { mobile } = useDisplay();
const renderBackground = !mobile.value;
</script>

<template>
  <AppBackground v-if="renderBackground" />
  <AppHeader />
  <AppSidebar />
  <AppModal />
  <AppSnacks />
  <AppMainContent />
  <slot></slot>
</template>
