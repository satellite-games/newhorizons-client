import { createVuetify } from 'vuetify';

export const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          accent: '#bf00ff',
          primary: '#00ffff',
          secondary: '#101010',
          surface: '#202020',
          background: '#000505',
        },
        variables: {
          'border-opacity': 0.8,
          'container-overlay-multiplier': 0.9,
        },
      },
      light: {
        colors: {
          accent: '#bf00ff',
          primary: '#00ffff',
          secondary: '#513472',
          surface: '#151515',
          background: '#faffff',
        },
      },
    },
  },
});
