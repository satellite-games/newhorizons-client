<script setup lang="ts">
import { VSelect } from 'vuetify/components';
import FieldButton from './FieldButton.vue';
import { ref } from 'vue';
import { watch } from 'vue';
import { intl } from '@spuxx/browser-utils';

export interface ButtonSelectOption {
  title: string;
  value: string;
}

const props = withDefaults(
  defineProps<{
    label: string;
    options?: ButtonSelectOption[];
    selectedValue?: string;
    color?: Color;
    required?: boolean;
    disabled?: boolean;
    rules?: Array<(value: string) => string | boolean>;
    onSelect: (value: string) => void;
  }>(),
  {
    color: 'secondary',
  },
);
// const selectedValue = computed(() => props.selectedValue);
const selectedValue = ref(props.selectedValue);
watch(
  () => props.selectedValue,
  (newVal) => {
    selectedValue.value = newVal;
  },
);

const selectNextOrPrevious = (change: number) => {
  if (!props.options) return;
  let newValue: undefined | string;
  if (selectedValue.value) {
    const index = props.options.findIndex((option) => option.value === selectedValue.value);
    let newIndex = index + change;
    if (newIndex >= props.options.length) newIndex = 0;
    else if (newIndex < 0) newIndex = props.options.length - 1;
    newValue = props.options[newIndex].value;
  } else newValue = props.options[0].value;
  handleSelect(newValue);
};

const handleSelect = (value: string) => {
  if (value) {
    selectedValue.value = value;
    props.onSelect(value);
  }
};
</script>
<template>
  <div :class="$style['button-select']">
    <FieldButton
      :color
      :disabled
      :value="-1"
      :on-click="selectNextOrPrevious"
      :title="intl('component.button-select.previous-option')"
      icon="mdi:chevron-left"
    />
    <VSelect
      :class="$style.select"
      :label
      :items="options"
      :bgColor="color"
      :required
      :rules
      :disabled
      variant="solo-filled"
      v-model="selectedValue"
      @update:modelValue="handleSelect"
    >
    </VSelect>
    <FieldButton
      :color
      :disabled
      direction="right"
      :value="1"
      :on-click="selectNextOrPrevious"
      :title="intl('component.button-select.next-option')"
      icon="mdi:chevron-right"
    />
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
</style>
