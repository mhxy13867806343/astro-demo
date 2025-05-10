/* empty css                                   */
import { c as createComponent, a as createAstro, g as renderComponent, e as renderScript, f as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_29rhiiAS.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DpSF7Foi.mjs';
import { f as fetchHeroDetail } from '../../chunks/api_DBlh3NCm.mjs';
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const heroDetail = await fetchHeroDetail(id || "1");
  if (!heroDetail) {
    return Astro2.redirect("/heroes");
  }
  const { hero, skins, spells } = heroDetail;
  const getStatWidth = (value) => {
    const num = parseInt(value, 10);
    return `${Math.min(num * 10, 100)}%`;
  };
  const roleLabels = {
    fighter: "\u6218\u58EB",
    mage: "\u6CD5\u5E08",
    assassin: "\u523A\u5BA2",
    tank: "\u5766\u514B",
    marksman: "\u5C04\u624B",
    support: "\u8F85\u52A9"
  };
  const roleNames = hero.roles ? hero.roles.map((role) => roleLabels[role] || role) : [];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${hero.name} - ${hero.title} | \u82F1\u96C4\u8054\u76DF` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <div class="mb-4"> <a href="/heroes" class="text-blue-500 hover:underline flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path> </svg>
返回英雄列表
</a> </div> <!-- 英雄基本信息 --> <div class="bg-gray-800 rounded-lg overflow-hidden shadow-xl"> <!-- 英雄头部信息 --> <div class="relative"> ${skins && skins.length > 0 && renderTemplate`<img${addAttribute(skins[0].mainImg || `https://game.gtimg.cn/images/lol/act/img/skin/big${hero.heroId}000.jpg`, "src")}${addAttribute(hero.name, "alt")} class="w-full h-64 object-cover object-center">`} <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"> <div class="flex items-end gap-4"> <img${addAttribute(hero.avatar, "src")}${addAttribute(hero.name, "alt")} class="w-24 h-24 rounded-full border-4 border-yellow-500 object-cover"> <div class="flex-1"> <div class="flex justify-between items-start"> <div> <h1 class="text-3xl font-bold text-white">${hero.name}</h1> <p class="text-xl text-gray-300">${hero.title}</p> <div class="flex flex-wrap gap-2 mt-2"> ${roleNames.map((role) => renderTemplate`<span class="bg-blue-600/60 text-white px-2 py-1 rounded text-xs">${role}</span>`)} </div> </div> <button id="favorite-btn" class="favorite-btn w-12 h-12 rounded-full bg-black/50 flex items-center justify-center"${addAttribute(hero.heroId, "data-hero-id")}${addAttribute(hero.name, "data-hero-name")}${addAttribute(hero.avatar, "data-hero-avatar")} title="收藏英雄"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300 favorite-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path> </svg> </button> </div> </div> </div> </div> </div> <!-- 英雄详细信息 --> <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-8"> <!-- 左侧：技能信息 --> <div> <h2 class="text-2xl font-bold text-white mb-4">技能详情</h2> <div class="space-y-4"> ${spells && spells.map((spell) => renderTemplate`<div class="bg-gray-700 rounded-lg p-4"> <div class="flex items-start gap-4"> <img${addAttribute(spell.abilityIconPath, "src")}${addAttribute(spell.name, "alt")} class="w-12 h-12 rounded"> <div> <h3 class="text-lg font-bold text-white">${spell.name}</h3> <p class="text-gray-300 text-sm">${spell.description}</p> </div> </div> </div>`)} </div> </div> <!-- 右侧：属性和皮肤 --> <div> <!-- 属性 --> <h2 class="text-2xl font-bold text-white mb-4">英雄属性</h2> <div class="space-y-3 mb-8"> <div> <div class="flex justify-between text-sm mb-1"> <span class="text-gray-300">攻击</span> <span class="text-white">${hero.attack}/10</span> </div> <div class="w-full bg-gray-700 rounded-full h-2.5"> <div class="bg-red-600 h-2.5 rounded-full"${addAttribute(`width: ${getStatWidth(hero.attack)}`, "style")}></div> </div> </div> <div> <div class="flex justify-between text-sm mb-1"> <span class="text-gray-300">防御</span> <span class="text-white">${hero.defense}/10</span> </div> <div class="w-full bg-gray-700 rounded-full h-2.5"> <div class="bg-green-600 h-2.5 rounded-full"${addAttribute(`width: ${getStatWidth(hero.defense)}`, "style")}></div> </div> </div> <div> <div class="flex justify-between text-sm mb-1"> <span class="text-gray-300">魔法</span> <span class="text-white">${hero.magic}/10</span> </div> <div class="w-full bg-gray-700 rounded-full h-2.5"> <div class="bg-blue-600 h-2.5 rounded-full"${addAttribute(`width: ${getStatWidth(hero.magic)}`, "style")}></div> </div> </div> <div> <div class="flex justify-between text-sm mb-1"> <span class="text-gray-300">难度</span> <span class="text-white">${hero.difficulty}/10</span> </div> <div class="w-full bg-gray-700 rounded-full h-2.5"> <div class="bg-purple-600 h-2.5 rounded-full"${addAttribute(`width: ${getStatWidth(hero.difficulty)}`, "style")}></div> </div> </div> </div> <!-- 皮肤 --> <h2 class="text-2xl font-bold text-white mb-4">英雄皮肤</h2> <div class="grid grid-cols-2 gap-4"> ${skins && skins.slice(0, 6).map((skin) => renderTemplate`<div class="bg-gray-700 rounded-lg overflow-hidden"> <img${addAttribute(skin.iconImg || `https://game.gtimg.cn/images/lol/act/img/skin/small${skin.skinId}.jpg`, "src")}${addAttribute(skin.name, "alt")} class="w-full aspect-video object-cover"> <div class="p-2"> <p class="text-white text-sm truncate">${skin.name}</p> </div> </div>`)} </div> </div> </div> </div> </main> ` })} ${renderScript($$result, "/Users/hooksvue/Desktop/astro-demo/src/pages/heroes/[id].astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/hooksvue/Desktop/astro-demo/src/pages/heroes/[id].astro", void 0);

const $$file = "/Users/hooksvue/Desktop/astro-demo/src/pages/heroes/[id].astro";
const $$url = "/heroes/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
