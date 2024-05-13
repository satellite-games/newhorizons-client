<script setup lang="ts">
import { ref } from 'vue';
import { CharacterPreset } from '@newhorizons/core';
import Container from '@/components/layout/Container.vue';
import { VBtn, VDivider, VFooter, VForm } from 'vuetify/components';
import { CharacterCreator } from '../services/character-creator';
import ButtonSelect from '@/components/common/ButtonSelect.vue';
import { loadResource } from '@/utils/misc.utils';
import { sleep } from '@spuxx/browser-utils';

const { creationInProgress } = CharacterCreator;
const characterPresets = ref<Resource<CharacterPreset[]>>(null);
loadResource(characterPresets, async () => {
  await sleep(50000);
  return (await import('@newhorizons/core')).characterPresets;
});
</script>
<template>
  <Container :state="characterPresets" loaderType="spinner">
    <h1>{{ $t('character-creation.route.preset.title') }}</h1>
    <VDivider />
    <VForm>
      <ButtonSelect />
      <VFooter>
        <VBtn to="/create-character" class="ml-4 primary" size="large" color="primary">
          {{
            $t(`character-creation.route.preset.${creationInProgress ? 'restart' : 'start'}`)
          }}</VBtn
        >
      </VFooter>
    </VForm>
  </Container>
</template>
