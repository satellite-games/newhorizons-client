<script setup lang="ts">
import Container from '@/components/layout/Container.vue';
import AppBackgroundParticles from '@/layouts/app/background/AppBackgroundParticles.vue';
import { VParallax, VDivider, VContainer, VRow, VCol, VBtn, VCard } from 'vuetify/components';
</script>

<template>
  <VParallax id="quickstart" src="/image/home/earth-parallax.jpg" height="100svh">
    <AppBackgroundParticles />
    <VContainer :class="$style.quickstart">
      <h1 v-html="$t('route.home.quickstart.header', { highlight: 'New Horizons.' })"></h1>
      <VDivider />
      <p>{{ $t('route.home.quickstart.text') }}</p>
      <VDivider class="border-opacity-0" />
      <div :class="$style['quickstart-buttons']">
        <VBtn to="/stellarpedia/basic-rules/introduction/about-the-game" size="large">
          {{ $t('route.home.quickstart.more') }}
        </VBtn>
        <VBtn to="/create-character" class="primary" size="large" color="primary">
          {{ $t('route.home.quickstart.start') }}
        </VBtn>
      </div>
    </VContainer>
  </VParallax>
  <Container style="margin-top: 100svh">
    <VContainer id="game-description">
      <h2 class="text-center">{{ $t('route.home.game-description.header') }}</h2>
      <p v-html="$t('route.home.game-description.text')"></p>
    </VContainer>

    <VContainer id="actions">
      <VRow>
        <VCol>
          <VCard color="secondary">
            <template v-slot:title>
              {{ $t('route.home.actions.legacy-editor.title') }}
            </template>
            <template v-slot:text>
              {{ $t('route.home.actions.legacy-editor.text') }}
            </template>
          </VCard>
        </VCol>
        <VCol>
          <VCard color="secondary">
            <template v-slot:title>
              {{ $t('route.home.actions.discord.title') }}
            </template>
            <template v-slot:text>
              {{ $t('route.home.actions.discord.text') }}
            </template>
          </VCard>
        </VCol>
        <VCol>
          <VCard color="secondary">
            <template v-slot:title>
              {{ $t('route.home.actions.roadmap.title') }}
            </template>
            <template v-slot:text>
              {{ $t('route.home.actions.roadmap.text') }}
            </template>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </Container>
</template>

<style module>
:global(.v-parallax) {
  position: absolute;
  top: 0;
  left: 0;
  height: 100svh;
  width: 100vw;
  z-index: 11;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

:global(.v-container:not(:first-of-type)) {
  margin-top: 5rem;
}

.quickstart {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  p {
    margin-top: 1rem;
  }

  .quickstart-buttons {
    margin-top: 1rem;
    :global(.v-btn:not(:first-child)) {
      margin-left: 1rem;
    }
  }

  h1 {
    font-size: 3rem;
    :global(b) {
      background: linear-gradient(to right, var(--color-primary), var(--color-accent));
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  }
}
</style>
