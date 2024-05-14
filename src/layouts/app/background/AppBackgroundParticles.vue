<script setup lang="ts">
const PARTICLE_DENSITY = 10;
const ANIMATION_DURATION = 15000;

interface ParticleLayer {
  key: 'small' | 'medium' | 'large';
  amount: number;
  velocity: number;
}
const particleLayers: ParticleLayer[] = [
  {
    key: 'small',
    amount: Math.floor(5 * PARTICLE_DENSITY),
    velocity: 3,
  },
  {
    key: 'medium',
    amount: Math.floor(2 * PARTICLE_DENSITY),
    velocity: 2,
  },
  {
    key: 'large',
    amount: Math.floor(1 * PARTICLE_DENSITY),
    velocity: 1,
  },
] as const;
</script>

<template>
  <span id="app-background-particles">
    <span v-for="layer in particleLayers" :key="layer.key">
      <span
        :class="[$style.particle, $style[layer.key]]"
        v-for="i in layer.amount"
        :key="`${layer.key}-${i}`"
        :style="{
          top: `${Math.round(Math.random() * 100)}%`,
          animationDelay: `${Math.random() * ANIMATION_DURATION}ms`,
          animationDuration: `${ANIMATION_DURATION * layer.velocity}ms`,
        }"
      ></span>
    </span>
  </span>
</template>

<style module>
:global(#app-background-particles) {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  opacity: 0.4;
}

.particle {
  position: absolute;
  background-color: rgb(var(--v-theme-on-background), 0.75);
  left: 101vw;
  & :local {
    animation: move linear infinite;
  }
}

.small {
  width: 1px;
  height: 1px;
}

.medium {
  width: 2px;
  height: 2px;
}

.large {
  width: 3px;
  height: 3px;
}

@keyframes move {
  100% {
    transform: translateX(-102vw);
  }
}
</style>
