<script setup lang="ts">
import Container from '@/components/layout/Container.vue';
import { Resource } from '@/reactivity/resource';
import { GameDataProvider } from '@/services/game-data-provider';
import type { Blueprint, CharacterOrigin } from '@newhorizons/core';
import { intl } from '@spuxx/browser-utils';
import { VForm } from 'vuetify/components';
import { CharacterCreator } from '../../services/character-creator';

const characterPresets = new Resource<Blueprint<CharacterOrigin>[]>(async () => {
  return await GameDataProvider.getBlueprints('characterOrigins');
}, 'characterPresets');
characterPresets.load();

const handleSubmit = () => {};
</script>
<template>
  <Container
    :title="intl('character-creation.route.origin.title')"
    size="large"
    :state="characterPresets.state"
    loaderType="spinner"
  >
    <VForm
      ref="form"
      v-if="Array.isArray(characterPresets) && CharacterCreator.preset"
      @submit.prevent="handleSubmit"
      class="form"
      :disabled="CharacterCreator.creationInProgress"
    ></VForm>
  </Container>
</template>
<style scoped></style>
