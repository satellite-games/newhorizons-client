<script setup lang="ts">
import { ref } from 'vue';
import { VSelect, VListItem } from 'vuetify/components';
import { useRoute } from 'vue-router';
import { Icon } from '@iconify/vue/dist/iconify.js';
import SidebarTeleport from '@/components/sidebar/SidebarTeleport.vue';
import { Stellarpedia } from '../services/stellarpedia';
import StellarpediaSidebarToc from './StellarpediaSidebarToc.vue';
import { Intl, intl } from '@spuxx/browser-utils';

const { params } = useRoute();
const { book } = params as { book: string };

const selectedBookId = ref<string>(book);
const books = ref<{ id: string; title: string; icon: string }[]>([]);

const getBooks = async () => {
  books.value = (await Stellarpedia.fetchBooks()).map((b) => {
    return {
      id: b.id,
      title: b.title[Intl.currentLocale as unknown as keyof typeof b.title],
      icon: b.icon,
    };
  });
};
getBooks();
</script>

<template>
  <SidebarTeleport expand>
    <VSelect
      class="book-select"
      :label="intl('stellarpedia.sidebar.book')"
      :items="books"
      item-title="title"
      item-value="id"
      v-model="selectedBookId"
      variant="outlined"
    >
      <template v-slot:item="{ props, item }">
        <VListItem v-bind="props" class="book-select-option">
          <template v-slot:prepend>
            <Icon :icon="item.raw.icon" />
          </template>
        </VListItem>
      </template>
    </VSelect>

    <StellarpediaSidebarToc :bookId="selectedBookId" />
  </SidebarTeleport>
</template>

<style scoped>
.book-select {
  margin: 1rem 0.5rem 0 0.5rem;

  :global(.v-input__details) {
    display: none;
  }
}

.book-select-option {
  :global(.v-list-item__prepend) {
    margin-right: 0.5rem;
  }
}
</style>
