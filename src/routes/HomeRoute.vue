<script setup lang="ts">
import Container from '@/components/layout/Container.vue';
import MainSidebar from '@/features/sidebars/main/MainSidebar.vue';
import {
  VParallax,
  VDivider,
  VContainer,
  VRow,
  VCol,
  VBtn,
  VCard,
  VSpacer,
} from 'vuetify/components';
</script>

<template>
  <MainSidebar />
  <VParallax id="quickstart" src="/image/home/earth-parallax.jpg" height="100svh">
    <VContainer>
      <VRow>
        <VCol>
          <h1 v-html="$t('route.home.quickstart.header', { highlight: 'New Horizons.' })"></h1>
          <VDivider />
          <p>{{ $t('route.home.quickstart.text') }}</p>
          <VDivider class="border-opacity-0" />
          <div>
            <VBtn to="/stellarpedia/basic-rules/introduction/about-the-game" size="large">
              {{ $t('route.home.quickstart.more') }}
            </VBtn>
            <VBtn to="/create-character" class="ml-4 primary" size="large" color="primary">
              {{ $t('route.home.quickstart.start') }}
            </VBtn>
          </div>
        </VCol>
        <VCol cols="4" class="d-none d-lg-flex d-xl-flex d-xxl-flex">
          <VSpacer />
        </VCol>
      </VRow>
    </VContainer>
  </VParallax>
  <Container>
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

<style scoped>
h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.v-container:not(:first-of-type) {
  margin-top: 5rem;
}

#quickstart {
  .v-container {
    height: 100%;

    .v-row {
      height: 75%;

      .v-col {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
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

  .v-divider {
    margin: 1rem 0;
  }

  .buttons {
    margin-top: 1rem;
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      filter: drop-shadow(8px 8px 16px var(--color-primary));
    }
  }
}
</style>
