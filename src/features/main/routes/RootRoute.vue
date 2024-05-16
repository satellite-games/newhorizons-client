<script setup lang="ts">
import ImageSection from '@/components/display/ImageSection.vue';
import Container from '@/components/layout/Container.vue';
import { VDivider, VRow, VCol, VBtn, VCard } from 'vuetify/components';
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
        elevation="25"
      >
        {{ $t('route.home.quickstart.more') }}
      </VBtn>
      <VBtn to="/create-character" size="large" color="primary" elevation="25">
        {{ $t('route.home.quickstart.start') }}
      </VBtn>
    </div>
  </Container>
  <Container style="margin-top: 100vh" :title="$t('route.home.game-description.header')">
    <p v-html="$t('route.home.game-description.text')"></p>
  </Container>

  <div :class="$style.cards">
    <VRow>
      <VCol>
        <VCard :class="$style.card">
          <template v-slot:title>
            <!-- <p :class="$style['card-title']"> -->
            {{ $t('route.home.actions.legacy-editor.title') }}
            <!-- </p> -->
          </template>
          <template v-slot:text>
            {{ $t('route.home.actions.legacy-editor.text') }}
          </template>
          <template v-slot:image>
            <ImageSection
              src="/image/background/background-25.png"
              height="100%"
              width="100%"
              :scale="0.46"
              :pos-x="0.2"
              :pos-y="0.35"
            />
          </template>
        </VCard>
      </VCol>
      <VCol>
        <VCard :class="$style.card">
          <template v-slot:title>
            {{ $t('route.home.actions.discord.title') }}
          </template>
          <template v-slot:text>
            {{ $t('route.home.actions.discord.text') }}
          </template>
          <template v-slot:image>
            <ImageSection
              src="/image/background/background-05.png"
              height="100%"
              width="100%"
              :scale="0.4"
              :pos-x="0"
              :pos-y="0.2"
            />
          </template>
        </VCard>
      </VCol>
      <VCol>
        <VCard
          :class="$style.card"
          link
          href="https://trello.com/b/VMqZjDPH/new-horizons-roadmap"
          target="_blank"
        >
          <template v-slot:title>
            {{ $t('route.home.actions.roadmap.title') }}
          </template>
          <template v-slot:text>
            {{ $t('route.home.actions.roadmap.text') }}
          </template>
          <template v-slot:image>
            <ImageSection
              src="/image/background/background-01.png"
              height="100%"
              width="100%"
              :scale="0.6"
              :pos-x="0"
              :pos-y="0.6"
            />
          </template>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<style module>
:global(.v-container:not(:first-of-type)) {
  margin-top: 5rem;
}

.quickstart {
  position: absolute;
  top: 65vh;
  transform: translateY(-50%);

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

.cards {
  margin-top: 2rem;
}

.card {
  min-width: 350px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: transform 200ms;

  :global(.v-card-text) {
    padding: 1rem !important;
    flex-grow: 0 !important;
    backdrop-filter: blur(4px) brightness(0.5);
  }
}

.card:hover {
  transform: scale(1.02);
}
</style>
