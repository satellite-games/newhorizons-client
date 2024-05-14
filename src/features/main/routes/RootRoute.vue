<script setup lang="ts">
import Container from '@/components/layout/Container.vue';
import { VDivider, VContainer, VRow, VCol, VBtn, VCard } from 'vuetify/components';
</script>

<template>
  <Container :class="$style.quickstart" color="transparent" elevation="0">
    <h1 v-html="$t('route.home.quickstart.header', { highlight: 'New Horizons.' })"></h1>
    <VDivider />
    <p>{{ $t('route.home.quickstart.text') }}</p>
    <VDivider class="border-opacity-0" />
    <div :class="$style['quickstart-buttons']">
      <VBtn
        to="/stellarpedia/basic-rules/introduction/about-the-game"
        size="large"
        color="secondary"
      >
        {{ $t('route.home.quickstart.more') }}
      </VBtn>
      <VBtn to="/create-character" size="large" color="primary">
        {{ $t('route.home.quickstart.start') }}
      </VBtn>
    </div>
  </Container>
  <Container style="margin-top: 100vh" :title="$t('route.home.game-description.header')">
    <VContainer id="game-description">
      <p v-html="$t('route.home.game-description.text')"></p>
    </VContainer>
  </Container>

  <Container id="actions" elevation="0" color="transparent">
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
  </Container>
</template>

<style module>
:global(.v-container:not(:first-of-type)) {
  margin-top: 5rem;
}

.quickstart {
  z-index: var(--z-index-container);
  position: absolute;
  top: 65vh;
  transform: translateY(-50%);

  /* margin-top: 50svh; */

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
