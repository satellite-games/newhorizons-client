<script setup lang="ts">
import { CharacterPreset, type Blueprint } from '@newhorizons/core';
import Container from '@/components/layout/Container.vue';
import { GameDataProvider } from '@/services/game-data-provider';
import { Resource } from '@/reactivity/resource';
import CharacterPresetForm from './components/CharacterPresetForm.vue';
import InfoButton from '@/components/common/InfoButton.vue';
import { intl } from '@spuxx/browser-utils';
import SimpleNavButton from '@/components/common/SimpleNavButton.vue';
import { CharacterCreator } from '../../services/character-creator';

const characterPresets = new Resource<Blueprint<CharacterPreset>[]>(async () => {
  const characterPresets = await GameDataProvider.getBlueprints('characterPresets');
  if (!CharacterCreator.context) = new
  return characterPresets;
}, 'characterPresets');
characterPresets.load();
</script>
<template>
  <Container
    :title="intl('character-creation.route.preset.title')"
    :state="characterPresets.state"
    size="large"
    loaderType="spinner"
  >
    <template v-slot:actions>
      <InfoButton />
      <SimpleNavButton
        type="forward"
        to="/create-character/origin"
        :disabled="!CharacterCreator.creationInProgress"
      />
    </template>
    <CharacterPresetForm v-if="characterPresets.data" :characterPresets="characterPresets.data" />
  </Container>
</template>
