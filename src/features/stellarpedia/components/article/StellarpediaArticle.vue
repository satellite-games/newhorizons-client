<script setup lang="ts">
import { ref } from 'vue';
import { Stellarpedia } from '../../services/stellarpedia';
import Markdown from '@/services/markdown/markdown.service';
import { useI18n } from 'vue-i18n';
import { VSkeletonLoader } from 'vuetify/components';
import { watch } from 'vue';

const props = defineProps<{
  book: string;
  chapter: string;
  article: string;
}>();

const { locale } = useI18n();

const content = ref<string | 'pending' | null>(null);
const load = async () => {
  content.value = 'pending';
  const { book, chapter, article } = props;
  const text = await Stellarpedia.fetchArticle(book, chapter, article, locale.value);
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
    background: linear-gradient(
      to-right,
      rgb(var(--v-theme-primary3)),
      rgb(var(--v-theme-accent3))
    );
  }
}
</style>
