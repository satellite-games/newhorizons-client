<script setup lang="ts">
import Container from '@/components/layout/Container.vue';
import { Resource } from '@/reactivity/resource';
import { GameDataProvider } from '@/services/game-data-provider';
import { CharacterOrigin, type Blueprint } from '@newhorizons/core';
import { intl } from '@spuxx/browser-utils';
import { CharacterCreator } from '../../services/character-creator';
import SimpleNavButton from '@/components/common/SimpleNavButton.vue';
import CharacterOriginForm from './components/CharacterOriginForm.vue';
import { useConditionalRedirect } from '@/router';

useConditionalRedirect(!CharacterCreator.presetLocked, '/create-character/preset');

const characterOrigins = new Resource<Blueprint<CharacterOrigin>[]>(async () => {
  const origins = await GameDataProvider.getBlueprints<CharacterOrigin>('characterOrigins');
  return origins;
}, 'characterPresets');

characterOrigins.load();
</script>
<template>
  <Container
    :title="intl('character-creation.route.origin.title')"
    size="large"
    :state="characterOrigins.state"
    loaderType="spinner"
  >
    <template v-slot:actions>
      <SimpleNavButton type="back" to="/create-character/preset" />
      <SimpleNavButton
        type="forward"
        to="/create-character/general"
        :disabled="!CharacterCreator.originLocked"
      />
    </template>
    <CharacterOriginForm v-if="characterOrigins.data" :characterOrigins="characterOrigins.data" />
  </Container>
</template>

<style scoped>
.form {
  display: grid;
}

.form .v-btn[type='submit'] {
  margin-top: 1rem;
  justify-self: center;
}
</style>
