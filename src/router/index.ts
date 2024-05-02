import { createRouter, createWebHistory } from 'vue-router';
import HomeRoute from '@/routes/HomeRoute.vue';
import AboutRoute from '@/routes/AboutRoute.vue';
import CreateCharacterRoute from '@/routes/CreateCharacterRoute.vue';
import StellarpediaArticleRoute from '@/routes/stellarpedia/StellarpediaArticleRoute.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeRoute,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutRoute,
    },
    {
      path: '/create-character',
      name: 'create-character',
      component: CreateCharacterRoute,
    },
    {
      path: '/stellarpedia/:book/:chapter/:article',
      name: 'stellarpedia-article',
      component: StellarpediaArticleRoute,
    },
  ],
});

export default router;
