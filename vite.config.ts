import { fileURLToPath, URL } from 'node:url';
import ViteYaml from '@modyfi/vite-plugin-yaml';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ViteYaml()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // We use manualChunks to create some feature-specific chunks.
        manualChunks: {
          game: ['@newhorizons/core'],
          wiki: ['js-yaml', 'marked'],
        },
      },
    },
  },
});
