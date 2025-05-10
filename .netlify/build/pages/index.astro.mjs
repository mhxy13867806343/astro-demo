/* empty css                                */
import { c as createComponent, g as renderComponent, f as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_29rhiiAS.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DpSF7Foi.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u82F1\u96C4\u8054\u76DF\u82F1\u96C4\u5217\u8868" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto p-4"> <h1 class="text-2xl font-bold text-center mb-4">欢迎来到英雄联盟英雄资料库</h1> <p class="text-center mb-4">点击下面的按钮进入英雄列表页面</p> <div class="flex justify-center"> <a href="/heroes" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">查看英雄列表</a> </div> </main> ` })}`;
}, "/Users/hooksvue/Desktop/astro-demo/src/pages/index.astro", void 0);

const $$file = "/Users/hooksvue/Desktop/astro-demo/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
