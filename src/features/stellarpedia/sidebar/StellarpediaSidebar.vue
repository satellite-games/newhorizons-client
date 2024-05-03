<script setup lang="ts">
import { VListItem, VListGroup } from 'vuetify/components';
import { Icon } from '@iconify/vue';
import type { StellarpediaToc } from '../types';
import { useI18n } from 'vue-i18n';
import SidebarTeleport from '@/components/sidebar/SidebarTeleport.vue';
import { ref } from 'vue';

const props = defineProps<{
  toc: StellarpediaToc;
}>();
const { toc } = props;
const { locale } = useI18n();

const openBook = ref<string | null>(null);
const openChapter = ref<string | null>(null);
</script>

<template>
  <SidebarTeleport v-if="toc">
    <VListGroup v-for="book in toc.books" :group="book.id" v-model="openBook">
      <template v-slot:activator="{ props }">
        <VListItem v-bind="props" :title="book.title[locale]" />
      </template>

      <VListGroup
        v-for="chapter in book.chapters"
        :key="chapter.id"
        v-model="openChapter"
        :value="chapter.id"
      >
        <template v-slot:activator="{ props }">
          <VListItem v-bind="props">
            {{ chapter.title[locale] }}
          </VListItem>
        </template>

        <RouterLink
          v-for="article in chapter.articles"
          :key="article.id"
          :to="`/stellarpedia/${book.id}/${chapter.id}/${article.id}`"
        >
          <VListItem link>
            <template v-slot:prepend>
              <Icon icon="mdi:file-document" />
            </template>
            <template v-slot:default>
              {{ article.title[locale] }}
            </template>
          </VListItem>
        </RouterLink>
      </VListGroup>
    </VListGroup>
  </SidebarTeleport>
</template>

<style scoped></style>
