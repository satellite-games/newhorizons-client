<script setup lang="ts">
import { ref } from 'vue';
import { VSkeletonLoader } from 'vuetify/components';
import { watch } from 'vue';
import { Wiki } from '@newhorizons/wiki';
import { postProcessArticle } from './article.utils';
import RuntimeComponent from '@/components/common/RuntimeComponent.vue';

const props = defineProps<{
  book: string;
  chapter: string;
  article: string;
}>();

const content = ref<string | 'pending' | null>(null);
const load = async () => {
  content.value = 'pending';
  const { book, chapter, article } = props;
  const html = await Wiki.fetchArticle(book, chapter, article);
  content.value = postProcessArticle(html);
};

watch(props, load, { immediate: true });
</script>
<template>
  <span v-if="content === 'pending'">
    <VSkeletonLoader type="article" />
  </span>
  <article v-else-if="content" class="wiki-article">
    <RuntimeComponent :template="content" />
  </article>
</template>

<style>
.wiki-article {
  display: flex;
  flex-direction: column;

  > *:first-child {
    margin-top: 0;
  }

  > *:not(:first-child) {
    margin-top: 1em;
  }

  > h1 {
    border-bottom: 1px solid rgb(var(--v-border-color), var(--v-border-opacity));
  }

  ul {
    padding-left: 2rem;

    :global(li:not(:first-child)) {
      margin-top: 0.5rem;
    }
  }

  blockquote {
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

    .blockquote-header {
      margin-bottom: 0.5rem;
      opacity: 0.5;
    }
  }

  figure {
    max-width: 100%;
    display: flex;
    flex-direction: column;

    figcaption {
      margin: 0.5rem auto 0 auto;
      font-style: italic;
      opacity: 0.8;
      text-align: center;
    }
  }

  img {
    max-width: 100%;
    margin: auto;
    border-radius: var(--v-border-radius);
  }

  table {
    td,
    th {
      padding: 0.5rem;
      vertical-align: top;
    }

    tbody {
      th {
        text-align: start;
      }
    }
  }
}
</style>
