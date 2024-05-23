<script setup lang="ts">
import { useRouteParamsAsStrings } from '@/router/router.hooks';
import StellarpediaSidebar from '../sidebar/StellarpediaSidebar.vue';
import Container from '@/components/layout/Container.vue';
import StellarpediaArticle from '../components/article/StellarpediaArticle.vue';
import StellarpediaArticleToolbar from '../components/article/StellarpediaArticleToolbar.vue';
import PageContent from '@/components/app/PageContent.vue';
import { intl } from '@spuxx/browser-utils';

const params = useRouteParamsAsStrings() as { book: string; chapter: string; article: string };
</script>

<template>
  <StellarpediaSidebar />
  <PageContent :title="intl('stellarpedia.title')">
    <Container size="max">
      <StellarpediaArticleToolbar
        :book="params.book"
        :chapter="params.chapter"
        :article="params.article"
      />
      <StellarpediaArticle
        :book="params.book"
        :chapter="params.chapter"
        :article="params.article"
      />
    </Container>
  </PageContent>
</template>
