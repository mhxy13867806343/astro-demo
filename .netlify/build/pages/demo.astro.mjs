/* empty css                                */
import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, f as renderTemplate, g as renderComponent } from '../chunks/astro/server_29rhiiAS.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DpSF7Foi.mjs';
import 'clsx';
/* empty css                                */
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Astro$1 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card" data-astro-cid-dohjnao5> <div class="content" data-astro-cid-dohjnao5> <h2 data-astro-cid-dohjnao5> ${href ? renderTemplate`<a${addAttribute(href, "href")} data-astro-cid-dohjnao5>${title}</a>` : title} </h2> <p data-astro-cid-dohjnao5>${body}</p> </div> </div> `;
}, "/Users/hooksvue/Desktop/astro-demo/src/components/Card.astro", void 0);

const $$Astro = createAstro();
const $$Demo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Demo;
  const pageTitle = "Astro \u7EC4\u4EF6\u6F14\u793A";
  const cards = [
    {
      title: "Astro \u7EC4\u4EF6",
      body: "Astro \u7EC4\u4EF6\u662F\u6784\u5EFA Astro \u7F51\u7AD9\u7684\u57FA\u672C\u5355\u5143\uFF0C\u5B83\u4EEC\u662F\u7EAF\u9759\u6001\u7684HTML\u7247\u6BB5\u3002",
      href: "https://docs.astro.build/zh-cn/core-concepts/astro-components/"
    },
    {
      title: "Astro \u5E03\u5C40",
      body: "\u5E03\u5C40\u7EC4\u4EF6\u5E2E\u52A9\u4F60\u5171\u4EAB\u5E38\u89C1\u7684UI\u7ED3\u6784\uFF0C\u5982\u9875\u7709\u3001\u5BFC\u822A\u680F\u548C\u9875\u811A\u3002",
      href: "https://docs.astro.build/zh-cn/core-concepts/layouts/"
    },
    {
      title: "Astro \u8DEF\u7531",
      body: "Astro \u4F7F\u7528\u57FA\u4E8E\u6587\u4EF6\u7684\u8DEF\u7531\u7CFB\u7EDF\uFF0Csrc/pages/ \u76EE\u5F55\u4E2D\u7684\u6BCF\u4E2A .astro \u6587\u4EF6\u90FD\u6210\u4E3A\u4E00\u4E2A\u9875\u9762\u3002",
      href: "https://docs.astro.build/zh-cn/core-concepts/routing/"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-prwxh6m4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-prwxh6m4> <h1 data-astro-cid-prwxh6m4>${pageTitle}</h1> <p class="intro" data-astro-cid-prwxh6m4>
这个页面展示了如何在 Astro 中创建和使用组件。下面的卡片是使用同一个 <code data-astro-cid-prwxh6m4>Card.astro</code> 组件渲染的，
      但每个卡片接收不同的属性（props）。
</p> <section class="cards" data-astro-cid-prwxh6m4> ${cards.map((card) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": card.title, "body": card.body, "href": card.href, "data-astro-cid-prwxh6m4": true })}`)} </section> <div class="code-example" data-astro-cid-prwxh6m4> <h2 data-astro-cid-prwxh6m4>组件用法示例</h2> <pre data-astro-cid-prwxh6m4><code data-astro-cid-prwxh6m4>---
import Card from '../components/Card.astro';
---

&lt;Card
  title="卡片标题"
  body="卡片内容描述"
  href="https://example.com"
/&gt;</code></pre> </div> <div class="navigation" data-astro-cid-prwxh6m4> <a href="/" class="button" data-astro-cid-prwxh6m4>返回首页</a> <a href="/guide" class="button secondary" data-astro-cid-prwxh6m4>查看指南</a> </div> </main> ` })} `;
}, "/Users/hooksvue/Desktop/astro-demo/src/pages/demo.astro", void 0);

const $$file = "/Users/hooksvue/Desktop/astro-demo/src/pages/demo.astro";
const $$url = "/demo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Demo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
