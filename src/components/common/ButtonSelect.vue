<script setup lang="ts">
import type { VSelect } from 'vuetify/components';
type VSelectProps = VProps<typeof VSelect>;

defineProps<{
  label: string;
  items: Object[];
  itemTitle: string;
  itemValue: string;
  variant?: VSelectProps['variant'];
}>();
</script>

<template>
  <div :class="$style['button-select']">
    <VSelect :label :items :itemTitle :itemValue :variant></VSelect>
  </div>
</template>
<style module>
.button-select {
  display: flex;
}
</style>
