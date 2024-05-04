import type { RouteRecordRaw } from 'vue-router';
import RootRoute from './RootRoute.vue';
import HomeRoute from './HomeRoute.vue';

export const mainRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    component: RootRoute,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeRoute,
  },
];
