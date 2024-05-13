<script setup lang="ts">
import { Interface } from '@/services/interface';
import { useDisplay } from 'vuetify';

const props = defineProps({
  open: Boolean,
});

const { open } = props;

const { mobile } = useDisplay();
if (open && !mobile.value) {
  Interface.setSidebarExpanded(true);
} else {
  Interface.setSidebarExpanded(false);
}
</script>

<template>
  <Teleport to="#sidebar-content">
    <slot />
  </Teleport>
</template>
