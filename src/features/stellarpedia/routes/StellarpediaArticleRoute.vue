<script setup lang="ts">
import { Stellarpedia } from '@/features/stellarpedia/services/stellarpedia';
import { useRouteParamsAsString } from '@/router/router.hooks';
import Markdown from '@/services/markdown/markdown.service';
import { ref } from 'vue';
import StellarpediaSidebar from '../sidebar/StellarpediaSidebar.vue';
import type { StellarpediaToc } from '@/features/stellarpedia/types';

const content = ref<string | null>(null);
const toc = ref<StellarpediaToc | null>(null);

const load = () => {
  const { book, chapter, article } = useRouteParamsAsString();
  Stellarpedia.fetchToc(book).then((result) => {
    toc.value = result;
  });
  Stellarpedia.fetchArticle(book, chapter, article).then(async (text) => {
    const html = await Markdown.parse(text);
    content.value = html;
  });
};

load();
</script>

<template>
  <StellarpediaSidebar v-if="toc" :toc="toc" />
  <div v-html="content"></div>
</template>
