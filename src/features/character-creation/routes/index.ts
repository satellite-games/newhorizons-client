import type { RouteRecordRaw } from 'vue-router';
import CharacterCreationRoute from './CharacterCreationRoute.vue';
import CharacterCreationPresetRoute from './preset/CharacterCreationPresetRoute.vue';
import CharacterCreationOriginRoute from './origin/CharacterCreationOriginRoute.vue';

export const characterCreationRoutes: RouteRecordRaw[] = [
  {
    name: 'character-creation',
    path: '/create-character',
    component: CharacterCreationRoute,
    redirect: '/create-character/preset',
    children: [
      {
        name: 'character-creation/preset',
        path: 'preset',
        component: CharacterCreationPresetRoute,
      },
      {
        name: 'character-creation/origin',
        path: 'origin',
        component: CharacterCreationOriginRoute,
      },
    ],
  },
];
