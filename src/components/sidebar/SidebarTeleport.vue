<script setup lang="ts">
import { Interface } from '@/services/interface';
import { useDisplay } from 'vuetify';

const props = defineProps<{ expand: boolean }>();
const { mobile } = useDisplay();

const { expand } = props;
if (expand && !mobile.value) Interface.setSidebarExpanded(true);
</script>

<template>
  <Teleport to="#sidebar-content">
    <slot></slot>
  </Teleport>
</template>
