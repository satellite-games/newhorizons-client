import { createRouter, createWebHistory } from 'vue-router';
import CreateCharacterRoute from '@/routes/CreateCharacterRoute.vue';
import { stellarpediaRoutes } from '@/features/stellarpedia/routes';
import { mainRoutes } from '@/features/main/routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...mainRoutes,
    {
      path: '/create-character',
      name: 'create-character',
      component: CreateCharacterRoute,
    },
    ...stellarpediaRoutes,
  ],
});

export default router;
