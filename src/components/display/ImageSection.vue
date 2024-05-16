<script setup lang="ts">
import type { StyleValue } from 'vue';
import { watch } from 'vue';
import { ref } from 'vue';
import { onMounted } from 'vue';

const props = defineProps<{
  /**
   * The source of the image.
   */
  src: string;
  /**
   * The scale of the image.
   */
  scale: number;
  /**
   * The horizontal position of the viewport relative to the upper-left corner of the image.
   * Should be between 0 and 1.
   */
  posX: number;
  /**
   * The vertical position of the viewport relative to the upper-left corner of the image.
   * Should be between 0 and 1.
   */
  posY: number;
  /**
   * The width of the container.
   */
  width?: string;
  /**
   * The height of the container.
   */
  height?: string;
}>();

/**
 * Image dimensions in [width, height].
 */
const imageDimensions = ref<[number, number]>([0, 0]);

onMounted(() => {
  const img = new Image();
  img.onload = () => {
    imageDimensions.value = [img.width, img.height];
  };
  img.src = props.src;
});

const containerStyle: StyleValue = {
  width: props.width,
  height: props.height,
};

const imageStyle = ref<
  { transform: string; top: string; left: string; transformOrigin: string } | undefined
>(undefined);

watch(imageDimensions, ([width, height]) => {
  imageStyle.value = {
    transform: `scale(${props.scale})`,
    top: `${-props.posY * height * props.scale}px`,
    left: `${-props.posX * width * props.scale}px`,
    transformOrigin: '0 0',
  };
});
</script>

<template>
  <div class="image-section" :style="containerStyle">
    <img :src="props.src" :style="imageStyle" />
  </div>
</template>

<style scoped>
.image-section {
  overflow: hidden;
  position: relative;
  border-radius: 4px;
}
img {
  position: absolute;
}
</style>
