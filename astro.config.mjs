// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static', // 使用静态生成模式
  build: {
    // 启用静态生成
    format: 'file'
  },
  server: {
    host: '0.0.0.0', // 允许外部访问
  }
});
