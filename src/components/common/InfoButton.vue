<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { intl } from '@spuxx/browser-utils';
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
    :title="intl('component.info-button.title')"
    @click="handleClick"
  >
    <Icon icon="mdi:information-circle-outline" class="icon" />
  </VBtn>
</template>

<style scoped>
.icon {
  font-size: x-large;
}
</style>
