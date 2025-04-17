import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.app.json'
    }),
    vue(),
    vueDevTools(),
  ],
  build: {
    sourcemap: true,
     lib: {
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: 'kit',
      formats: ['es'],
      fileName: (format) => `kit.${format}.ts`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },

  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
