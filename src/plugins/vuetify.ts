import { createVuetify } from 'vuetify';

export const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          accent: '#bf00ff',
          primary: '#00ffff',
          secondary: '#513472',
          background: '#000505',
        },
        variables: {
          'border-opacity': 0.8,
        },
      },
      light: {
        colors: {
          accent: '#bf00ff',
          primary: '#00ffff',
          secondary: '#513472',
          background: '#faffff',
        },
      },
    },
  },
});
