<script setup lang="ts">
import { VList, VListGroup, VListItem, VSkeletonLoader } from 'vuetify/components';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { ref, toRef, watch } from 'vue';
import type { StellarpediaBookToc } from '../types';
import { Stellarpedia } from '../services/stellarpedia';
import { sleep } from '@/utils/misc.utils';
import { useI18n } from 'vue-i18n';

const props = defineProps<{
  bookId: string;
}>();

const bookId = toRef(props, 'bookId');
const { locale } = useI18n();

const tableOfContents = ref<StellarpediaBookToc | 'pending' | null>(null);
const openGroups = ref<string[]>([]);

watch(bookId, () => {
  updateTableOfContents();
});

const updateTableOfContents = async () => {
  tableOfContents.value = 'pending';
  try {
    tableOfContents.value = await Stellarpedia.fetchToc(bookId.value);
  } catch (error) {
    tableOfContents.value = null;
  }
};
updateTableOfContents();
</script>
<template>
  <span v-if="tableOfContents === 'pending'" class="skeleton">
    <VSkeletonLoader type="heading" width="200" />
    <VSkeletonLoader type="heading" width="300" />
    <VSkeletonLoader type="heading" width="250" />
  </span>

  <VList
    v-else-if="tableOfContents"
    class="table-of-contents"
    v-model:opened="openGroups"
    open-strategy="multiple"
  >
    <VListGroup v-for="chapter in tableOfContents.chapters" :key="chapter.id" :value="chapter.id">
      <template v-slot:activator="{ props }">
        <VListItem v-bind="props">
          <template v-slot:prepend>
            <Icon icon="mdi:book" />
          </template>
          {{ chapter.title[locale] }}
        </VListItem>
      </template>

      <RouterLink
        v-for="article in chapter.articles"
        :key="article.id"
        :to="`/stellarpedia/${bookId}/${chapter.id}/${article.id}`"
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
  </VList>
</template>
