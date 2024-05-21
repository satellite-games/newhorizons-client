<script setup lang="ts">
import { CharacterPreset, type Blueprint } from '@newhorizons/core';
import Container from '@/components/layout/Container.vue';
import { GameDataProvider } from '@/services/game-data-provider';
import { Resource } from '@/reactivity/resource';
import CharacterPresetForm from './components/CharacterPresetForm.vue';
import StellarpediaButton from '@/components/stellarpedia/StellarpediaButton.vue';

const characterPresets = new Resource<Blueprint<CharacterPreset>[]>(async () => {
  return await GameDataProvider.getBlueprints('characterPresets');
}, 'characterPresets');
characterPresets.load();
</script>
<template>
  <Container
    :title="$t('character-creation.route.preset.title')"
    :state="characterPresets.state"
    size="large"
    loaderType="spinner"
  >
    <template v-slot:header-append>
      <StellarpediaButton />
    </template>
    <CharacterPresetForm v-if="characterPresets.data" :characterPresets="characterPresets.data" />
  </Container>
</template>
