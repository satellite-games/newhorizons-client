<script setup lang="ts">
import { useRouteParamsAsStrings } from '@/router/router.hooks';
import StellarpediaSidebar from '../sidebar/StellarpediaSidebar.vue';
import Container from '@/components/layout/Container.vue';
import StellarpediaArticle from '../components/article/StellarpediaArticle.vue';

const params = useRouteParamsAsStrings() as { book: string; chapter: string; article: string };
</script>

<template>
  <StellarpediaSidebar />
  <Container size="max">
    <StellarpediaArticle :book="params.book" :chapter="params.chapter" :article="params.article" />
  </Container>
</template>
