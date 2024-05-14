<script setup lang="ts">
import { ref } from 'vue';
import { CharacterPreset } from '@newhorizons/core';
import Container from '@/components/layout/Container.vue';
import { VBtn, VForm } from 'vuetify/components';
import { CharacterCreator } from '../services/character-creator';
import ButtonSelect from '@/components/common/ButtonSelect.vue';
import { loadResource } from '@/utils/misc.utils';
import { GameDataProvider } from '@/services/game-data-provider';

const { creationInProgress } = CharacterCreator;
const characterPresets = ref<Resource<CharacterPreset[]>>(null);
loadResource(characterPresets, async () => {
  return await GameDataProvider.getBlueprints('characterPresets');
});

const handlePresetSelect = (preset: CharacterPreset) => {
  console.log(preset);
};
</script>
<template>
  <Container
    :title="$t('character-creation.route.preset.title')"
    size="medium"
    :state="characterPresets"
    loaderType="article"
  >
    <VForm v-if="Array.isArray(characterPresets)">
      <ButtonSelect
        :label="$t('character-creation.route.preset.select')"
        :items="characterPresets"
        :defaultItem="characterPresets[0]"
        itemTitle="name"
        itemValue="name"
        :onSelect="handlePresetSelect"
      />

      <footer class="d-flex justify-center">
        <VBtn to="/create-character" size="large" color="primary">
          {{ $t(`character-creation.route.preset.${creationInProgress ? 'restart' : 'start'}`) }}
        </VBtn>
      </footer>
    </VForm>
  </Container>
</template>
