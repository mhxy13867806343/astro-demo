import { c as createComponent, a as createAstro, b as addAttribute, r as renderHead, d as renderSlot, e as renderScript, f as renderTemplate } from './astro/server_29rhiiAS.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                        */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "\u82F1\u96C4\u8054\u76DF", description = "\u82F1\u96C4\u8054\u76DF\u82F1\u96C4\u8D44\u6599\u5E93 - \u67E5\u770B\u6240\u6709\u82F1\u96C4\u7684\u8BE6\u7EC6\u4FE1\u606F\u3001\u6280\u80FD\u548C\u76AE\u80A4" } = Astro2.props;
  return renderTemplate`<html lang="zh-CN" data-theme="dark"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-gray-900 text-gray-200"> <div class="min-h-screen flex flex-col"> <header class="navbar bg-gray-900 shadow-md border-b border-blue-900/50"> <div class="container mx-auto"> <div class="flex-1"> <a href="/heroes" class="flex items-center gap-2"> <span class="text-xl font-bold text-blue-400">英雄联盟</span> <span class="text-gray-400">|</span> <span class="text-gray-300">英雄资料库</span> </a> </div> <div class="flex-none"> <ul class="menu menu-horizontal px-1"> <li><a href="/heroes" class="font-medium text-gray-300 hover:text-blue-400">英雄列表</a></li> <li> <details> <summary class="text-gray-300 hover:text-blue-400">主题</summary> <ul class="p-2 bg-gray-800 rounded-t-none border border-gray-700"> <li><a data-theme-toggle="light" class="text-gray-300 hover:text-blue-400">亮色</a></li> <li><a data-theme-toggle="dark" class="text-gray-300 hover:text-blue-400">暗色</a></li> </ul> </details> </li> </ul> </div> </div> </header> <main class="flex-grow container mx-auto p-4"> ${renderSlot($$result, $$slots["default"])} </main> <footer class="footer footer-center p-4 bg-gray-800 text-gray-400 border-t border-blue-900/50"> <div> <p>英雄联盟资料库 - 使用 Astro + Tailwind CSS + DaisyUI 构建</p> <p class="text-xs mt-1">本站仅用于学习和展示，非官方网站</p> </div> </footer> </div> ${renderScript($$result, "/Users/hooksvue/Desktop/astro-demo/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "/Users/hooksvue/Desktop/astro-demo/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
