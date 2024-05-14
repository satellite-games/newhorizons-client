<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';
import { ref } from 'vue';
import { VBtn, VSelect } from 'vuetify/components';

const props = defineProps<{
  label: string;
  items: Object[];
  defaultItem?: Object;
  itemTitle: string;
  itemValue: string;
  itemIcon?: string;
  color?: Color;
  onSelect: (value: any) => void;
}>();

// @ts-expect-error - The type of the items as well as their properties are unknown
const selectedValue = ref<string | null>(props.defaultItem[props.itemValue] ?? null);
const color: Color = props.color ?? 'secondary';

const selectNextOrPrevious = (change: 1 | -1) => {
  if (selectedValue.value) {
    const index = props.items.indexOf(selectedValue.value);
    let newIndex = index + change;
    console.log(index);
    if (newIndex >= props.items.length) newIndex = 0;
    else if (newIndex < 0) newIndex = props.items.length - 1;
    // @ts-expect-error - The type of the items as well as their properties are unknown
    selectedValue.value = props.items[newIndex][props.itemValue];
    // @ts-expect-error - The type of the items as well as their properties are unknown
  } else selectedValue.value = props.items[0][props.itemValue];
  handleSelect();
};

const handleSelect = () => {
  if (!selectedValue.value) return;
  // @ts-expect-error - The type of the items as well as their properties are unknown
  const selectedItem = props.items.find((item) => item[props.itemValue] === selectedValue.value);
  if (selectedItem) props.onSelect(selectedItem);
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
      :items
      :itemTitle
      :itemValue
      :bgColor="color"
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
