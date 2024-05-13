import type { RouteRecordRaw } from 'vue-router';
import CharacterCreationRoute from './CharacterCreationRoute.vue';
import CharacterCreationPresetRoute from './CharacterCreationPresetRoute.vue';

export const characterCreationRoutes: RouteRecordRaw[] = [
  {
    path: '/create-character',
    component: CharacterCreationRoute,
    redirect: '/create-character/preset',
    children: [
      {
        path: 'preset',
        component: CharacterCreationPresetRoute,
      },
    ],
  },
];
