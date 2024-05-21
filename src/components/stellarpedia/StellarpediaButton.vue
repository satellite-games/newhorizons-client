<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { VBtn } from 'vuetify/components';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>

<template>
  <VBtn
    type="button"
    variant="plain"
    icon
    :title="$t('component.stellarpedia-button.title')"
    @click="handleClick"
  >
    <Icon icon="mdi:weather-sunny" class="icon" />
  </VBtn>
</template>

<style scoped>
.icon {
  font-size: x-large;
}
</style>
