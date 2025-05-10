// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static', // 使用静态生成模式，适合GitHub Pages
  site: 'https://mhxy13867806343.github.io', // 设置站点URL
  base: '/astro-demo', // 设置基本路径为仓库名
  build: {
    assets: 'assets', // 静态资源目录
  },
  server: {
    host: '0.0.0.0', // 允许外部访问
  }
});
