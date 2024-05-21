<script setup lang="ts">
import SidebarTeleport from '@/components/sidebar/SidebarTeleport.vue';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { VList, VListItem } from 'vuetify/components';
import { CharacterCreator } from '../services/character-creator/character-creator.service';
import { computed } from 'vue';
import { CharacterCreationProgress } from '../services/character-creator';
import { intl } from '@spuxx/browser-utils';

const originDisabled = computed(
  () => CharacterCreator.progress < CharacterCreationProgress.presetSelected,
);
const postOriginDisabled = computed(
  () => CharacterCreator.progress < CharacterCreationProgress.originSelected,
);
</script>

<template>
  <SidebarTeleport expand>
    <VList>
      <VListItem link to="/create-character/preset">
        <template v-slot:title> {{ intl('character-creation.route.preset.title') }} </template>
        <template v-slot:prepend> <Icon icon="mdi:tune"></Icon></template>
      </VListItem>
      <VListItem link to="/create-character/origin" :disabled="originDisabled">
        <template v-slot:title> {{ intl('character-creation.route.origin.title') }} </template>
        <template v-slot:prepend> <Icon icon="mdi:earth"></Icon></template>
      </VListItem>
      <VListItem link to="/create-character/general" :disabled="postOriginDisabled">
        <template v-slot:title> {{ intl('character-creation.route.general.title') }} </template>
        <template v-slot:prepend> <Icon icon="mdi:account"></Icon></template>
      </VListItem>
      <VListItem link to="/create-character/attributes" :disabled="postOriginDisabled">
        <template v-slot:title> {{ intl('character-creation.route.attributes.title') }} </template>
        <template v-slot:prepend> <Icon icon="mdi:run"></Icon></template>
      </VListItem>
      <VListItem link to="/create-character/traits" :disabled="postOriginDisabled">
        <template v-slot:title> {{ intl('character-creation.route.traits.title') }} </template>
        <template v-slot:prepend> <Icon icon="mdi:yin-yang"></Icon></template>
      </VListItem>
      <VListItem link to="/create-character/skills" :disabled="postOriginDisabled">
        <template v-slot:title> {{ intl('character-creation.route.skills.title') }} </template>
        <template v-slot:prepend> <Icon icon="mdi:bike"></Icon></template>
      </VListItem>
      <VListItem link to="/create-character/abilities" :disabled="postOriginDisabled">
        <template v-slot:title> {{ intl('character-creation.route.abilities.title') }} </template>
        <template v-slot:prepend> <Icon icon="mdi:cellphone-wireless"></Icon></template>
      </VListItem>
      <VListItem link to="/create-character/inventory" :disabled="postOriginDisabled">
        <template v-slot:title> {{ intl('character-creation.route.inventory.title') }} </template>
        <template v-slot:prepend> <Icon icon="mdi:bag-personal"></Icon></template>
      </VListItem>
      <VListItem link to="/create-character/finish" :disabled="postOriginDisabled">
        <template v-slot:title> {{ intl('character-creation.route.finish.title') }} </template>
        <template v-slot:prepend> <Icon icon="mdi:flag-checkered"></Icon></template>
      </VListItem>
    </VList>
  </SidebarTeleport>
</template>
