import StellarpediaArticleRoute from './StellarpediaArticleRoute.vue';

export const stellarpediaRoutes = [
  {
    path: '/stellarpedia/:book/:chapter/:article',
    name: 'stellarpedia-article',
    component: StellarpediaArticleRoute,
  },
];
