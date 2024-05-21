<script setup lang="ts">
import { VListItem } from 'vuetify/components';
import { Icon } from '@iconify/vue';
import SidebarTeleport from '../../../components/sidebar/SidebarTeleport.vue';
import { intl } from '@spuxx/browser-utils';
</script>

<template>
  <SidebarTeleport>
    <VListItem :title="intl('sidebar.main.community.title')"></VListItem>
    <VListItem link>
      <template v-slot:prepend>
        <Icon icon="fa-brands:discord" />
      </template>
      {{ intl('sidebar.main.community.discord') }}</VListItem
    >
  </SidebarTeleport>
</template>
