import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import colors from 'vuetify/util/colors';

export const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          accent: colors.purple.accent2,
          accent2: colors.purple.accent4,
          accent3: colors.deepPurple.darken4,
          primary: colors.cyan.accent2,
          primary2: colors.cyan.darken2,
          primary3: colors.cyan.darken4,
          secondary: '#101010',
          secondary2: '#292929',
          secondary3: '#393939',
          surface: '#212121',
          background: colors.shades.black,
          success: colors.green.accent3,
          error: colors.red.darken1,
          warning: colors.orange.accent2,
          info: colors.cyan.darken3,
        },
        variables: {
          'border-opacity': 0.8,
          'border-radius': '4px',
          'container-overlay-multiplier': 0.9,
          'theme-primary-overlay-multiplier': 1,
          'theme-secondary-overlay-multiplier': 1,
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
