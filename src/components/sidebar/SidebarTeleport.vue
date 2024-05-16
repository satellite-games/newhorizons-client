<script setup lang="ts">
import { Interface } from '@/services/interface';

const props = defineProps<{ expand: boolean }>();

const { expand } = props;
if (expand) Interface.setSidebarExpanded(true);
</script>

<template>
  <Teleport to="#sidebar-content">
    <slot></slot>
  </Teleport>
</template>
