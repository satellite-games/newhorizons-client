import { createRouter, createWebHistory } from 'vue-router';
import HomeRoute from '@/routes/HomeRoute.vue';
import AboutRoute from '@/routes/AboutRoute.vue';
import CreateCharacterRoute from '@/routes/CreateCharacterRoute.vue';
import { stellarpediaRoutes } from '@/features/stellarpedia/routes';

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
    ...stellarpediaRoutes,
  ],
});

export default router;
