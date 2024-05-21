<script setup lang="ts">
import { ref } from 'vue';
import { Stellarpedia } from '../../services/stellarpedia';
import Markdown from '@/services/markdown/markdown.service';
import { VSkeletonLoader } from 'vuetify/components';
import { watch } from 'vue';
import { Intl } from '@spuxx/browser-utils';

const props = defineProps<{
  book: string;
  chapter: string;
  article: string;
}>();

const content = ref<string | 'pending' | null>(null);
const load = async () => {
  content.value = 'pending';
  const { book, chapter, article } = props;
  const text = await Stellarpedia.fetchArticle(book, chapter, article, Intl.currentLocale);
  const html = await Markdown.parse(text);
  content.value = html;
};

watch(props, load, { immediate: true });
</script>
<template>
  <span v-if="content === 'pending'">
    <VSkeletonLoader type="article" />
  </span>
  <article v-else-if="content" v-html="content" class="article"></article>
</template>

<style scoped>
.article {
  display: flex;
  flex-direction: column;

  :global(> *:first-child) {
    margin-top: 0;
  }

  :global(> *:not(:first-child)) {
    margin-top: 1em;
  }

  :global(> h1) {
    border-bottom: 1px solid rgb(var(--v-border-color), var(--v-border-opacity));
  }

  :global(ul) {
    padding-left: 2rem;

    :global(li:not(:first-child)) {
      margin-top: 0.5rem;
    }
  }

  :global(a) {
    color: rgb(var(--v-theme-primary));
  }

  :global(blockquote) {
    border-radius: var(--v-border-radius);
    padding: 1.25rem;
    overflow: hidden;
    text-decoration: wavy;
    font-style: italic;
    opacity: 0.8;
    background: linear-gradient(
      135deg,
      rgb(var(--v-theme-accent3), 0.5),
      rgb(var(--v-theme-accent), 0.3)
    );

    :global(.blockquote-header) {
      margin-bottom: 0.5rem;
      opacity: 0.5;
    }
  }

  :global(img) {
    max-width: 100%;
    margin: auto;
    border-radius: var(--v-border-radius);
  }
}
</style>
