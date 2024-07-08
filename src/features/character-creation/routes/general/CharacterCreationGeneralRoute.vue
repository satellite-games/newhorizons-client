<script setup lang="ts">
import { useConditionalRedirect } from '@/router';
import CharacterGeneralForm from './components/CharacterGeneralForm.vue';
import { CharacterCreator } from '../../services/character-creator';

useConditionalRedirect(!CharacterCreator.originLocked, '/create-character/preset');
</script>

<template>
  <CharacterGeneralForm />
</template>
