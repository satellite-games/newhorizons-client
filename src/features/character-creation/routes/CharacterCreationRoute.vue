<script setup lang="ts">
import PageContent from '@/components/app/PageContent.vue';
import CharacterCreationSidebar from '@/features/character-creation/sidebar/CharacterCreationSidebar.vue';
</script>

<template>
  <CharacterCreationSidebar />
  <PageContent>
    <router-view />
  </PageContent>
</template>
