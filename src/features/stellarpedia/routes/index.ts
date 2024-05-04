import StellarpediaArticleRoute from './StellarpediaArticleRoute.vue';

export const stellarpediaRoutes = [
  {
    path: '/stellarpedia',
    name: 'stellarpedia',
    redirect: '/stellarpedia/basic-rules/introduction/welcome',
    children: [
      {
        path: ':book/:chapter/:article',
        name: 'stellarpedia-article',
        component: StellarpediaArticleRoute,
      },
    ],
  },
];
