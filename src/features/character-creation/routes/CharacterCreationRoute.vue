<script setup lang="ts">
import PageContent from '@/components/app/PageContent.vue';
import DebugContent from '@/components/display/DebugContent.vue';
import CharacterCreationSidebar from '@/features/character-creation/sidebar/CharacterCreationSidebar.vue';
import { CharacterCreator } from '../services/character-creator';
import { intl } from '@spuxx/browser-utils';
import { computed } from 'vue';

const stringifiedPreset = computed(
  () => JSON.stringify(CharacterCreator.preset, null, 2) ?? 'No preset selected',
);
</script>

<template>
  <CharacterCreationSidebar />
  <PageContent
    :title="CharacterCreator.character?.general.name ?? intl('character-creation.title')"
  >
    <router-view />
    <DebugContent>
      {{ stringifiedPreset }}
    </DebugContent>
  </PageContent>
</template>
