<script setup lang="ts">
import { Stellarpedia } from '@/features/stellarpedia/services/stellarpedia';
import { useRouteParamsAsString } from '@/router/router.hooks';
import Markdown from '@/services/markdown/markdown.service';
import { ref } from 'vue';
import StellarpediaSidebar from '../sidebar/StellarpediaSidebar.vue';

const content = ref<string | null>(null);
const load = () => {
  const { book, chapter, article } = useRouteParamsAsString();
  Stellarpedia.fetchArticle(book, chapter, article).then(async (text) => {
    const html = await Markdown.parse(text);
    content.value = html;
  });
};

load();
</script>

<template>
  <StellarpediaSidebar />
  <div v-html="content"></div>
</template>
