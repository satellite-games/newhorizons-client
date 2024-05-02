<script setup lang="ts">
import { VDivider, VListItem } from 'vuetify/components';
import { Icon } from '@iconify/vue';
import SidebarTeleport from '../SidebarTeleport.vue';
</script>

<template>
  <SidebarTeleport>
    <VListItem :title="$t('sidebar.main.community.title')"></VListItem>
    <VListItem link>
      <template v-slot:prepend>
        <Icon icon="fa-brands:discord" />
      </template>
      {{ $t('sidebar.main.community.discord') }}</VListItem
    >
  </SidebarTeleport>
</template>
