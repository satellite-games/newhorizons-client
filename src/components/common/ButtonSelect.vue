<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';
import { ref } from 'vue';
import { VBtn, VSelect } from 'vuetify/components';

export interface ButtonSelectOption {
  title: string;
  value: string;
}

const props = withDefaults(
  defineProps<{
    label: string;
    options?: ButtonSelectOption[];
    defaultKey?: string;
    color?: Color;
    required?: boolean;
    onSelect: (selectedOption: ButtonSelectOption) => void;
  }>(),
  {
    color: 'secondary',
  },
);

const selectedValue = ref<string | null>(props.defaultKey ?? null);

const selectNextOrPrevious = (change: 1 | -1) => {
  if (!props.options) return;
  if (selectedValue.value) {
    const index = props.options.findIndex((option) => option.value === selectedValue.value);
    let newIndex = index + change;
    if (newIndex >= props.options.length) newIndex = 0;
    else if (newIndex < 0) newIndex = props.options.length - 1;
    selectedValue.value = props.options[newIndex].value;
  } else selectedValue.value = props.options[0].value;
  handleSelect(selectedValue.value);
};

const handleSelect = (value: string) => {
  console.log(value);
  if (!selectedValue.value || !props.options) return;
  const selectedOption = props.options.find((item) => item.value === selectedValue.value);
  if (selectedOption) props.onSelect(selectedOption);
};
</script>

<template>
  <div :class="$style['button-select']">
    <VBtn
      :class="$style.button"
      variant="flat"
      :color="color"
      @click="() => selectNextOrPrevious(-1)"
    >
      <Icon icon="mdi:chevron-left" :title="$t('misc.back')" />
    </VBtn>
    <VSelect
      :class="$style.select"
      :label
      :items="options"
      :bgColor="color"
      :required
      variant="solo-filled"
      v-model="selectedValue"
      @update:modelValue="handleSelect"
    >
    </VSelect>
    <VBtn
      :class="$style.button"
      variant="flat"
      :color="color"
      @click="() => selectNextOrPrevious(1)"
    >
      <Icon icon="mdi:chevron-right" :title="$t('misc.next')" />
    </VBtn>
  </div>
</template>
<style module>
.button-select {
  display: flex;
}

.select {
  :global(.v-field) {
    border-radius: 0;
    box-shadow: none;
  }
}

.button {
  height: 56px !important;
}

.button:first-of-type {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.button:last-of-type {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
