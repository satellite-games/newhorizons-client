<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { intl } from '@spuxx/browser-utils';
import { computed } from 'vue';
import { VBtn } from 'vuetify/components';

const props = defineProps<{
  type: 'forward' | 'back';
  variant?: VProps<typeof VBtn>['variant'];
  to: string;
  disabled?: boolean;
}>();

const variant = props.variant ?? 'plain';
const icon = computed(() => (props.type === 'forward' ? 'mdi:chevron-right' : 'mdi:chevron-left'));
const title = computed(() => (props.type === 'forward' ? intl('misc.forward') : intl('misc.back')));
</script>

<template>
  <VBtn :variant :to :title icon :disabled>
    <Icon :icon />
  </VBtn>
</template>
