// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server', // 使用服务器渲染模式
  adapter: netlify({
    edgeMiddleware: true // 启用Edge中间件，提高性能
  }),
  server: {
    host: '0.0.0.0', // 允许外部访问
  }
});
