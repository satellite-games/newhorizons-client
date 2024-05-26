<script setup lang="ts">
import { computed } from 'vue';
import { defineComponent } from 'vue';
import { compile } from 'vue';

const props = defineProps<{
  template: string;
}>();
const compiledComponent = computed(() => {
  const render = compile(props.template);
  return defineComponent({
    render,
  });
});
</script>

<template>
  <component :is="compiledComponent" v-if="compiledComponent"></component>
</template>
