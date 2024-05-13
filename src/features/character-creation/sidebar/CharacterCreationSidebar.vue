<script setup lang="ts">
import SidebarTeleport from '@/components/sidebar/SidebarTeleport.vue';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { VList, VListItem } from 'vuetify/components';
import { CharacterCreator } from '../services/character-creator/character-creator.service';

const { creationInProgress } = CharacterCreator;
</script>

<template>
  <SidebarTeleport open>
    <VList>
      <VListItem link to="/create-character/preset">
        <template v-slot:title> {{ $t('character-creation.route.preset.title') }} </template>
        <template v-slot:prepend> <Icon icon="mdi:tune"></Icon></template>
      </VListItem>
    </VList>
  </SidebarTeleport>
</template>
