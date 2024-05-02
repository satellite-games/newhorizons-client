<script setup lang="ts">
import { useRouteParamsAsString } from '@/router/router.hooks';
import Markdown from '@/services/markdown/markdown.service';
import { Stellarpedia } from '@/services/stellarpedia';
import { ref } from 'vue';

// import CreateCharacterSidebar from '@/features/sidebars/CreateCharacterSidebar.vue';
const content = ref<string | null>(null);

const fetchArticle = async () => {
  const { book, chapter, article } = useRouteParamsAsString();
  const text = await Stellarpedia.fetchArticle(book, chapter, article);
  const html = await Markdown.parse(text);
  content.value = html;
};

fetchArticle();
</script>

<template>
  <!-- <CreateCharacterSidebar /> -->
  <div v-html="content"></div>
</template>
