import { createVuetify } from 'vuetify';

export const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          accent: '#bf00ff',
          'accent-2': '#513472',
          primary: '#00ffff',
          secondary: '#101010',
          surface: '#151515',
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
          'accent-2': '#513472',
          primary: '#00ffff',
          secondary: '#513472',
          surface: '#151515',
          background: '#faffff',
        },
      },
    },
  },
});
