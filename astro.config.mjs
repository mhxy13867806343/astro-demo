// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server', // 启用SSR模式
  server: {
    host: '0.0.0.0', // 允许外部访问
  }
});
