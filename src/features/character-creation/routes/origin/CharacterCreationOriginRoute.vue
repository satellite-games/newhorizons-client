<script setup lang="ts">
import ButtonSelect from '@/components/common/ButtonSelect.vue';
import Container from '@/components/layout/Container.vue';
import { Resource } from '@/reactivity/resource';
import { GameDataProvider } from '@/services/game-data-provider';
import type { Blueprint } from 'vuetify';
import { VForm } from 'vuetify/components';

const characterPresets = new Resource<Blueprint<CharacterOrigin>[]>(async () => {
  return await GameDataProvider.getBlueprints('characterOrigins');
}, 'characterPresets');
characterPresets.load();
</script>
<template>
  <Container
    :title="$t('character-creation.route.origin.title')"
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
