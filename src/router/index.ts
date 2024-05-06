import { createRouter, createWebHistory } from 'vue-router';
import { stellarpediaRoutes } from '@/features/stellarpedia/routes';
import { mainRoutes } from '@/features/main/routes';
import { characterCreationRoutes } from '@/features/character-creation/routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...mainRoutes, ...stellarpediaRoutes, ...characterCreationRoutes],
});

export default router;
