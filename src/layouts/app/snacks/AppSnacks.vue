<script setup lang="ts">
import { Snacks } from '@/services/snacks/snacks.service';
import type { Snack, SnackType } from '@/services/snacks/types';
import { Icon } from '@iconify/vue';
import { computed } from 'vue';
import { VCard, VScaleTransition } from 'vuetify/components';

const snacks = computed(() => Snacks.snacks);
const getIcon = (type: SnackType) => {
  switch (type) {
    case 'success':
      return 'mdi:check';
    case 'warning':
      return 'mdi:alert-outline';
    case 'error':
      return 'mdi:alert-circle-outline';
    default:
      return 'mdi:information-slab-circle-outline';
  }
};

const handleClick = (snack: Snack) => {
  Snacks.remove(snack.id!);
};
</script>

<template>
  <div class="snack-container">
    <div v-for="snack in snacks" :key="snack.id">
      <VScaleTransition appear>
        <VCard class="snack" role="alert" :color="snack.type" @click="handleClick(snack)">
          <Icon :icon="getIcon(snack.type)" class="icon" />
          <p class="text">{{ snack.message }}</p>
          <span class="timer" :style="{ animationDuration: `${snack.timeout}ms` }"></span>
        </VCard>
      </VScaleTransition>
    </div>
  </div>
</template>

<style scoped>
.snack-container {
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.snack {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  margin: 0.5rem 0;
  max-width: 20rem;
}

.text {
  flex-grow: 1;
}

.icon {
  height: 100%;
  width: 1.5rem;
  margin-right: 0.5rem;
}

.timer {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  height: 6px;
  width: 100%;
  animation: linear timer;
}

@keyframes timer {
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}
</style>
