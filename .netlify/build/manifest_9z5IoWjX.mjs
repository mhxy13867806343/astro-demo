import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, h as decodeKey } from './chunks/astro/server_29rhiiAS.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/hooksvue/Desktop/astro-demo/","cacheDir":"file:///Users/hooksvue/Desktop/astro-demo/node_modules/.astro/","outDir":"file:///Users/hooksvue/Desktop/astro-demo/dist/","srcDir":"file:///Users/hooksvue/Desktop/astro-demo/src/","publicDir":"file:///Users/hooksvue/Desktop/astro-demo/public/","buildClientDir":"file:///Users/hooksvue/Desktop/astro-demo/dist/","buildServerDir":"file:///Users/hooksvue/Desktop/astro-demo/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/demo.C02TAovf.css"},{"type":"inline","content":".card[data-astro-cid-dohjnao5]{border-radius:8px;box-shadow:0 4px 6px #0000001a;padding:1.5rem;background-color:#fff;transition:transform .2s ease,box-shadow .2s ease;margin-bottom:1rem}.card[data-astro-cid-dohjnao5]:hover{transform:translateY(-5px);box-shadow:0 8px 12px #0000001a}.content[data-astro-cid-dohjnao5] h2[data-astro-cid-dohjnao5]{margin-top:0;font-size:1.5rem;color:#4f39fa}.content[data-astro-cid-dohjnao5] a[data-astro-cid-dohjnao5]{color:inherit;text-decoration:none}.content[data-astro-cid-dohjnao5] a[data-astro-cid-dohjnao5]:hover{text-decoration:underline}.content[data-astro-cid-dohjnao5] p[data-astro-cid-dohjnao5]{margin-bottom:0;color:#4b5563}main[data-astro-cid-prwxh6m4]{max-width:800px;margin:0 auto;padding:2rem;font-family:system-ui,sans-serif}h1[data-astro-cid-prwxh6m4]{font-size:2.5rem;color:#4f39fa;margin-bottom:1.5rem}.intro[data-astro-cid-prwxh6m4]{font-size:1.1rem;line-height:1.6;margin-bottom:2rem;color:#4b5563}.cards[data-astro-cid-prwxh6m4]{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1.5rem;margin-bottom:3rem}.code-example[data-astro-cid-prwxh6m4]{margin-top:2rem;margin-bottom:3rem}.code-example[data-astro-cid-prwxh6m4] h2[data-astro-cid-prwxh6m4]{font-size:1.5rem;color:#111827;margin-bottom:1rem}pre[data-astro-cid-prwxh6m4]{background-color:#f3f4f6;padding:1rem;border-radius:.5rem;overflow-x:auto}code[data-astro-cid-prwxh6m4]{font-family:monospace}.navigation[data-astro-cid-prwxh6m4]{display:flex;gap:1rem;justify-content:center}.button[data-astro-cid-prwxh6m4]{display:inline-block;background:linear-gradient(83.21deg,#3245ff,#bc52ee);color:#fff;padding:.75rem 1.5rem;border-radius:.5rem;text-decoration:none;font-weight:500;transition:all .2s ease}.button[data-astro-cid-prwxh6m4].secondary{background:#fff;color:#3245ff;border:1px solid #3245ff}.button[data-astro-cid-prwxh6m4]:hover{opacity:.9;transform:translateY(-2px)}\n"}],"routeData":{"route":"/demo","isIndex":false,"type":"page","pattern":"^\\/demo\\/?$","segments":[[{"content":"demo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/demo.astro","pathname":"/demo","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/demo.C02TAovf.css"},{"type":"inline","content":"main[data-astro-cid-5tcejxga]{max-width:800px;margin:0 auto;padding:2rem;font-family:system-ui,sans-serif}h1[data-astro-cid-5tcejxga]{font-size:2.5rem;color:#4f39fa;margin-bottom:2rem}h2[data-astro-cid-5tcejxga]{font-size:1.8rem;color:#111827;margin-top:2rem;margin-bottom:1rem;border-bottom:1px solid #e5e7eb;padding-bottom:.5rem}section[data-astro-cid-5tcejxga]{margin-bottom:2.5rem}p[data-astro-cid-5tcejxga],li[data-astro-cid-5tcejxga]{line-height:1.6;color:#4b5563}ul[data-astro-cid-5tcejxga],ol[data-astro-cid-5tcejxga]{padding-left:1.5rem}pre[data-astro-cid-5tcejxga]{background-color:#f3f4f6;padding:1rem;border-radius:.5rem;overflow-x:auto}code[data-astro-cid-5tcejxga]{font-family:monospace;background-color:#f3f4f6;padding:.2rem .4rem;border-radius:.25rem}pre[data-astro-cid-5tcejxga] code[data-astro-cid-5tcejxga]{background-color:transparent;padding:0}.navigation[data-astro-cid-5tcejxga]{margin-top:3rem;display:flex;justify-content:center}.button[data-astro-cid-5tcejxga]{display:inline-block;background:linear-gradient(83.21deg,#3245ff,#bc52ee);color:#fff;padding:.75rem 1.5rem;border-radius:.5rem;text-decoration:none;font-weight:500;transition:all .2s ease}.button[data-astro-cid-5tcejxga]:hover{opacity:.9;transform:translateY(-2px)}\n"}],"routeData":{"route":"/guide","isIndex":false,"type":"page","pattern":"^\\/guide\\/?$","segments":[[{"content":"guide","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/guide.astro","pathname":"/guide","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/demo.C02TAovf.css"}],"routeData":{"route":"/heroes/[id]","isIndex":false,"type":"page","pattern":"^\\/heroes\\/([^/]+?)\\/?$","segments":[[{"content":"heroes","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/heroes/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/demo.C02TAovf.css"}],"routeData":{"route":"/heroes","isIndex":true,"type":"page","pattern":"^\\/heroes\\/?$","segments":[[{"content":"heroes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/heroes/index.astro","pathname":"/heroes","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/demo.C02TAovf.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/hooksvue/Desktop/astro-demo/src/pages/demo.astro",{"propagation":"none","containsHead":true}],["/Users/hooksvue/Desktop/astro-demo/src/pages/guide.astro",{"propagation":"none","containsHead":true}],["/Users/hooksvue/Desktop/astro-demo/src/pages/heroes/[id].astro",{"propagation":"none","containsHead":true}],["/Users/hooksvue/Desktop/astro-demo/src/pages/heroes/index.astro",{"propagation":"none","containsHead":true}],["/Users/hooksvue/Desktop/astro-demo/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/guide@_@astro":"pages/guide.astro.mjs","\u0000@astro-page:src/pages/heroes/[id]@_@astro":"pages/heroes/_id_.astro.mjs","\u0000@astro-page:src/pages/heroes/index@_@astro":"pages/heroes.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/demo@_@astro":"pages/demo.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","/Users/hooksvue/Desktop/astro-demo/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_WPTCrKIg.mjs","/Users/hooksvue/Desktop/astro-demo/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","\u0000@astrojs-manifest":"manifest_9z5IoWjX.mjs","/Users/hooksvue/Desktop/astro-demo/src/pages/heroes/[id].astro?astro&type=script&index=0&lang.ts":"_astro/_id_.astro_astro_type_script_index_0_lang.DtFbZsT2.js","/Users/hooksvue/Desktop/astro-demo/src/pages/heroes/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.D1Wv1tws.js","/Users/hooksvue/Desktop/astro-demo/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.h37VuwZw.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/hooksvue/Desktop/astro-demo/src/pages/heroes/[id].astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const a=document.getElementById(\"favorite-btn\");if(a){let l=function(){const t=localStorage.getItem(\"lol-favorites\");if(t)try{e=JSON.parse(t),n()}catch(o){console.error(\"Failed to parse favorites:\",o),e=[]}},s=function(){localStorage.setItem(\"lol-favorites\",JSON.stringify(e)),n()},n=function(){const t=e.some(o=>o.id===r);i&&t?(i.setAttribute(\"fill\",\"currentColor\"),i.classList.add(\"text-red-500\"),i.classList.remove(\"text-gray-300\")):i&&(i.setAttribute(\"fill\",\"none\"),i.classList.remove(\"text-red-500\"),i.classList.add(\"text-gray-300\"))},v=function(t,o,u){e.some(m=>m.id===t)||(e.push({id:t,name:o,avatar:u}),s())},f=function(t){e=e.filter(o=>o.id!==t),s()};const r=a.getAttribute(\"data-hero-id\")||\"\",c=a.getAttribute(\"data-hero-name\")||\"\",d=a.getAttribute(\"data-hero-avatar\")||\"\",i=a.querySelector(\".favorite-icon\");let e=[];a.addEventListener(\"click\",()=>{e.some(o=>o.id===r)?f(r):r&&c&&d&&v(r,c,d)}),l()}});"],["/Users/hooksvue/Desktop/astro-demo/src/pages/heroes/index.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const y=document.getElementById(\"hero-search\"),w=document.querySelectorAll(\".hero-card\"),v=document.querySelectorAll(\".role-filter-btn\"),f=document.querySelectorAll(\".favorite-btn\"),A=document.getElementById(\"show-favorites\"),B=document.getElementById(\"close-favorites\"),i=document.getElementById(\"favorites-modal\"),l=document.getElementById(\"favorites-list\"),d=document.getElementById(\"no-favorites\"),h=document.getElementById(\"favorites-count\");let c=\"All\",n=\"\",r=[];function F(){const e=localStorage.getItem(\"lol-favorites\");if(e)try{r=JSON.parse(e),g()}catch(t){console.error(\"Failed to parse favorites:\",t),r=[]}}function m(){localStorage.setItem(\"lol-favorites\",JSON.stringify(r)),g()}function I(){f.forEach(e=>{const t=e.getAttribute(\"data-hero-id\"),s=r.some(a=>a.id===t),o=e.querySelector(\".favorite-icon\");o&&s?(o.setAttribute(\"fill\",\"currentColor\"),o.classList.add(\"text-red-500\"),o.classList.remove(\"text-gray-300\")):o&&(o.setAttribute(\"fill\",\"none\"),o.classList.remove(\"text-red-500\"),o.classList.add(\"text-gray-300\"))})}function g(){I(),h&&(h.textContent=r.length.toString()),l&&d&&(l.innerHTML=\"\",r.length===0?d.classList.remove(\"hidden\"):(d.classList.add(\"hidden\"),r.forEach(e=>{const t=document.createElement(\"div\");t.className=\"relative bg-gray-800 rounded-lg overflow-hidden\",t.innerHTML=`\n              <a href=\"/heroes/${e.id}\" class=\"block\">\n                <img src=\"${e.avatar}\" alt=\"${e.name}\" class=\"w-full aspect-square object-cover\">\n                <div class=\"absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2\">\n                  <h3 class=\"text-white text-sm font-bold truncate\">${e.name}</h3>\n                </div>\n              </a>\n              <button class=\"remove-favorite absolute top-1 right-1 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center\" data-hero-id=\"${e.id}\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-4 w-4 text-white\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\" />\n                </svg>\n              </button>\n            `,l.appendChild(t)}),document.querySelectorAll(\".remove-favorite\").forEach(e=>{e.addEventListener(\"click\",t=>{t.preventDefault(),t.stopPropagation();const s=e.getAttribute(\"data-hero-id\")||\"\";s&&L(s)})})))}function S(e,t,s){r.some(o=>o.id===e)||(r.push({id:e,name:t,avatar:s}),m())}function L(e){r=r.filter(t=>t.id!==e),m()}y?.addEventListener(\"input\",e=>{n=e.target.value.toLowerCase(),p()}),v.forEach(e=>{e.addEventListener(\"click\",()=>{v.forEach(t=>{t.classList.remove(\"bg-blue-600\"),t.classList.add(\"bg-gray-700\")}),e.classList.remove(\"bg-gray-700\"),e.classList.add(\"bg-blue-600\"),c=e.getAttribute(\"data-sort\")||\"All\",p()})}),f.forEach(e=>{e.addEventListener(\"click\",t=>{t.preventDefault(),t.stopPropagation();const s=e.getAttribute(\"data-hero-id\")||\"\",o=e.getAttribute(\"data-hero-name\")||\"\",a=e.getAttribute(\"data-hero-avatar\")||\"\";r.some(u=>u.id===s)?L(s):s&&o&&a&&S(s,o,a)})}),A?.addEventListener(\"click\",()=>{i?.classList.remove(\"hidden\")}),B?.addEventListener(\"click\",()=>{i?.classList.add(\"hidden\")}),i?.addEventListener(\"click\",e=>{e.target===i&&i.classList.add(\"hidden\")});function p(){const e=document.getElementById(\"hero-list\"),t=document.getElementById(\"no-results\");let s=0;w.forEach(o=>{const a=o.getAttribute(\"data-name\")?.toLowerCase()||\"\",E=o.getAttribute(\"data-title\")?.toLowerCase()||\"\",u=o.getAttribute(\"data-tags\")?.toLowerCase()||\"\",k=o.getAttribute(\"data-sort\")?.split(\",\")||[],C=a.includes(n)||E.includes(n)||u.includes(n),x=c===\"All\"||k.includes(c),b=o.closest(\".hero-card-wrapper\");C&&x?(b?.classList.remove(\"hidden\"),s++):b?.classList.add(\"hidden\")}),s===0?(e?.classList.add(\"hidden\"),t?.classList.remove(\"hidden\")):(e?.classList.remove(\"hidden\"),t?.classList.add(\"hidden\"))}F()});"],["/Users/hooksvue/Desktop/astro-demo/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{document.querySelectorAll(\"[data-theme-toggle]\").forEach(m=>{m.addEventListener(\"click\",()=>{const e=m.getAttribute(\"data-theme-toggle\");e&&(document.documentElement.setAttribute(\"data-theme\",e),localStorage.setItem(\"theme\",e))})});const t=localStorage.getItem(\"theme\");t&&document.documentElement.setAttribute(\"data-theme\",t)});"]],"assets":["/_astro/demo.C02TAovf.css","/favicon.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"TJC3bmA55klAHX1rIxi1wlmQ5V5ydKkGJyRl5mBZ+Yk=","sessionConfig":{"driver":"fs-lite","options":{"base":"/Users/hooksvue/Desktop/astro-demo/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
