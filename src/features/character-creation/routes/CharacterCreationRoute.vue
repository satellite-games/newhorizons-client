<script setup lang="ts">
import PageContent from '@/components/app/PageContent.vue';
import DebugContent from '@/components/common/DebugContent.vue';
import CharacterCreationSidebar from '@/features/character-creation/sidebar/CharacterCreationSidebar.vue';
import { CharacterCreator } from '../services/character-creator';
import { intl } from '@spuxx/browser-utils';
</script>

<template>
  <CharacterCreationSidebar />
  <PageContent
    :title="CharacterCreator.character?.general.name ?? intl('character-creation.title')"
  >
    <router-view />
    <DebugContent> Progress: {{ CharacterCreator.progress }}<br /> </DebugContent>
  </PageContent>
</template>
