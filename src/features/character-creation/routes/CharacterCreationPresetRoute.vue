<script setup lang="ts">
import { CharacterPreset, type Blueprint } from '@newhorizons/core';
import Container from '@/components/layout/Container.vue';
import { GameDataProvider } from '@/services/game-data-provider';
import CharacterPresetForm from './components/CharacterPresetForm.vue';
import { Resource } from '@/reactivity/resource';
import { sleep } from '@spuxx/browser-utils';

const characterPresets = new Resource<Blueprint<CharacterPreset>[]>(async () => {
  await sleep(5000);
  return await GameDataProvider.getBlueprints('characterPresets');
}, 'characterPresets');
characterPresets.load();
</script>
<template>
  <Container
    :title="$t('character-creation.route.preset.title')"
    :resource="characterPresets"
    size="medium"
    loaderType="article"
  >
    <CharacterPresetForm v-if="characterPresets.data" :characterPresets="characterPresets.data" />
  </Container>
</template>
