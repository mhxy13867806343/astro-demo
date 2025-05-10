/* empty css                                */
import { c as createComponent, a as createAstro, g as renderComponent, f as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_29rhiiAS.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DpSF7Foi.mjs';
/* empty css                                 */
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro();
const $$Guide = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Guide;
  const greeting = "Astro \u57FA\u7840\u6307\u5357";
  const list = ["\u4EC0\u4E48\u662F Astro?", "Astro \u9879\u76EE\u7ED3\u6784", "Astro \u7EC4\u4EF6", "Astro \u7279\u6027", "\u521B\u5EFA\u65B0\u9875\u9762"];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-5tcejxga": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-5tcejxga> <ul data-astro-cid-5tcejxga> ${list.map((item, index) => renderTemplate`<li${addAttribute(index, "key")} data-astro-cid-5tcejxga>${item}</li>`)} </ul> <h1 data-astro-cid-5tcejxga>Astro 基础指南</h1> <section data-astro-cid-5tcejxga> <h2 data-astro-cid-5tcejxga>什么是 Astro?</h2> <p data-astro-cid-5tcejxga>Astro 是一个现代的静态站点生成器，专注于内容驱动的网站。它允许你使用你喜欢的UI组件（React, Vue, Svelte等）但最终输出的是纯HTML和CSS，提供极快的加载速度。</p> </section> <section data-astro-cid-5tcejxga> <h2 data-astro-cid-5tcejxga>Astro 项目结构</h2> <ul data-astro-cid-5tcejxga> <li data-astro-cid-5tcejxga><strong data-astro-cid-5tcejxga>src/pages/</strong> - 所有放在这个目录的 .astro 文件都会自动成为网站的页面</li> <li data-astro-cid-5tcejxga><strong data-astro-cid-5tcejxga>src/components/</strong> - 可重用的UI组件</li> <li data-astro-cid-5tcejxga><strong data-astro-cid-5tcejxga>src/layouts/</strong> - 页面布局组件</li> <li data-astro-cid-5tcejxga><strong data-astro-cid-5tcejxga>src/assets/</strong> - 图片、字体等静态资源</li> <li data-astro-cid-5tcejxga><strong data-astro-cid-5tcejxga>public/</strong> - 不需要处理的静态文件，会直接复制到构建目录</li> </ul> </section> <section data-astro-cid-5tcejxga> <h2 data-astro-cid-5tcejxga>Astro 组件</h2> <p data-astro-cid-5tcejxga>Astro 组件是 Astro 的基本构建块，它们有两个主要部分：</p> <ol data-astro-cid-5tcejxga> <li data-astro-cid-5tcejxga><strong data-astro-cid-5tcejxga>组件脚本</strong> - 包含在 --- 之间的代码，用于导入、定义变量和执行JavaScript</li> <li data-astro-cid-5tcejxga><strong data-astro-cid-5tcejxga>组件模板</strong> - HTML 模板，可以使用组件脚本中定义的变量</li> </ol> <pre data-astro-cid-5tcejxga><code data-astro-cid-5tcejxga>---
// 组件脚本 (在服务器上执行)
const greeting = "你好，世界！";
---

<!-- 组件模板 (发送到浏览器) -->
<h1 data-astro-cid-5tcejxga>${greeting}</h1></code></pre> </section> <section data-astro-cid-5tcejxga> <h2 data-astro-cid-5tcejxga>Astro 特性</h2> <ul data-astro-cid-5tcejxga> <li data-astro-cid-5tcejxga><strong data-astro-cid-5tcejxga>零JS默认</strong> - 默认情况下不发送JavaScript到浏览器</li> <li data-astro-cid-5tcejxga><strong data-astro-cid-5tcejxga>岛屿架构</strong> - 允许你在需要的地方添加交互性</li> <li data-astro-cid-5tcejxga><strong data-astro-cid-5tcejxga>服务器优先</strong> - 尽可能在服务器上完成工作</li> <li data-astro-cid-5tcejxga><strong data-astro-cid-5tcejxga>内容集合</strong> - 管理和验证内容</li> <li data-astro-cid-5tcejxga><strong data-astro-cid-5tcejxga>UI不可知论</strong> - 支持React, Vue, Svelte等多种框架</li> </ul> </section> <section data-astro-cid-5tcejxga> <h2 data-astro-cid-5tcejxga>创建新页面</h2> <p data-astro-cid-5tcejxga>在 Astro 中创建新页面非常简单，只需在 <code data-astro-cid-5tcejxga>src/pages</code> 目录中创建一个新的 .astro 文件。文件路径将决定页面的URL。</p> <ul data-astro-cid-5tcejxga> <li data-astro-cid-5tcejxga><code data-astro-cid-5tcejxga>src/pages/index.astro</code> → <code data-astro-cid-5tcejxga>/</code></li> <li data-astro-cid-5tcejxga><code data-astro-cid-5tcejxga>src/pages/about.astro</code> → <code data-astro-cid-5tcejxga>/about</code></li> <li data-astro-cid-5tcejxga><code data-astro-cid-5tcejxga>src/pages/blog/index.astro</code> → <code data-astro-cid-5tcejxga>/blog</code></li> <li data-astro-cid-5tcejxga><code data-astro-cid-5tcejxga>src/pages/blog/post-1.astro</code> → <code data-astro-cid-5tcejxga>/blog/post-1</code></li> </ul> </section> <div class="navigation" data-astro-cid-5tcejxga> <a href="/" class="button" data-astro-cid-5tcejxga>返回首页</a> </div> </main> ` })} `;
}, "/Users/hooksvue/Desktop/astro-demo/src/pages/guide.astro", void 0);

const $$file = "/Users/hooksvue/Desktop/astro-demo/src/pages/guide.astro";
const $$url = "/guide";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Guide,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
