<script setup lang="ts">
import { debug } from '@spuxx/browser-utils';
import { onMounted, ref } from 'vue';

const IMAGES_AMOUNT = 25;
const SLIDE_INTERVAL = 10000;
const SLIDE_OVERLAP = 0.1;

const slideshowRef = ref<HTMLSpanElement | null>(null);

const createImagePath = (index: number) =>
  `/image/background/background-${String(index).padStart(2, '0')}.png`;

const updateSlideshow = () => {
  const slideshow = slideshowRef.value;
  if (!slideshow) return;
  const currentSlideCount = slideshow.children.length;
  // If the slideshow has more than 2 children, delete the first one
  if (currentSlideCount > 2) {
    slideshow.removeChild(slideshow.children[0]);
  }
  // Insert a new slide at the end
  const newImagePath = createImagePath(Math.floor(Math.random() * IMAGES_AMOUNT) + 1);
  const newSlide = document.createElement('span');
  newSlide.className = 'app-background-slide';
  newSlide.style.backgroundImage = `url(${newImagePath})`;
  newSlide.style.animation = `app-background-slide-fade ${SLIDE_INTERVAL}ms linear, app-background-slide-move ${SLIDE_INTERVAL}ms linear`;
  slideshow.appendChild(newSlide);
  debug(`Inserted new background image slide: ${newImagePath}`);
};

onMounted(() => {
  setInterval(updateSlideshow, SLIDE_INTERVAL * (1 - SLIDE_OVERLAP));
  updateSlideshow();
});
</script>
<template>
  <span id="app-background-slideshow" ref="slideshowRef"></span>
</template>
<style>
#app-background-slideshow {
  opacity: 0.3;
}

.app-background-slide {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  scale: 1.1;
  background-size: cover;
  background-position: center;
  opacity: 0;
}

@keyframes app-background-slide-fade {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes app-background-slide-move {
  0% {
    transform: translateX(2%);
  }
  100% {
    transform: translateX(-2%);
  }
}
</style>
