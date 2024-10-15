import { c as create_ssr_component, v as validate_component, e as each, a as escape, b as add_attribute } from './ssr-BKV7toZk.js';
import { I as ISOToName, c as cn } from './ISOToName-i49Fsh62.js';
import 'clsx';
import 'tailwind-merge';

const Marquee = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pauseOnHover = false } = $$props;
  let { vertical = false } = $$props;
  let { repeat = 4 } = $$props;
  let { reverse = false } = $$props;
  let { class: className = "" } = $$props;
  if ($$props.pauseOnHover === void 0 && $$bindings.pauseOnHover && pauseOnHover !== void 0) $$bindings.pauseOnHover(pauseOnHover);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0) $$bindings.vertical(vertical);
  if ($$props.repeat === void 0 && $$bindings.repeat && repeat !== void 0) $$bindings.repeat(repeat);
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0) $$bindings.reverse(reverse);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `<div${add_attribute(
    "class",
    cn(
      "group flex overflow-hidden p-2 [--duration:2s] [--gap:1rem] [gap:var(--gap)]",
      {
        "flex-row": !vertical,
        "flex-col": vertical
      },
      className
    ),
    0
  )}>${each({ length: repeat }, (_, i) => {
    return `<div${add_attribute(
      "class",
      cn("flex shrink-0 justify-around [gap:var(--gap)]", {
        "animate-marquee flex-row": !vertical,
        "animate-marquee-vertical flex-col": vertical,
        "group-hover:[animation-play-state:paused]": pauseOnHover,
        "[animation-direction:reverse]": reverse
      }),
      0
    )}>${slots.default ? slots.default({}) : `Default`} </div>`;
  })}</div>`;
});
const ReviewCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { body } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.body === void 0 && $$bindings.body && body !== void 0) $$bindings.body(body);
  return `<figure${add_attribute(
    "class",
    cn(
      "relative w-64 cursor-pointer overflow-hidden rounded-2xl border p-4",
      // light styles
      "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      // dark styles
      "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    ),
    0
  )}><div class="flex flex-row items-center gap-2"> <div class="flex flex-col"> <figcaption class="text-sm font-bold dark:text-white">${escape(name)}</figcaption> </div></div> <blockquote class="mt-2 text-sm">${escape(body)}</blockquote></figure>`;
});
const css = {
  code: "@keyframes svelte-15dum4s-rotate{100%{transform:translate(-50%, -50%) rotate(1turn)}}.cont.svelte-15dum4s{z-index:-1;border-radius:1rem;margin:0 auto;width:100%;height:100%;overflow:hidden;background-color:#030303;perspective:7vw;position:fixed;bottom:0}.griddy.svelte-15dum4s{position:absolute;top:0;left:50%;overflow:hidden;width:350%;height:200%;transform:translate(-50%, -50%) rotateX(-60deg);background-image:linear-gradient(\r\n				to right,\r\n				rgba(255, 0, 255, 0.5) 1px,\r\n				transparent 3em\r\n			),\r\n			linear-gradient(\r\n				to bottom,\r\n				rgba(0, 255, 255, 0.5) 1px,\r\n				transparent 3em\r\n			);background-size:10% 10%;animation:svelte-15dum4s-gridAnimation 24s linear infinite}.grid-flip.svelte-15dum4s{top:100%;transform:translate(-50%, -50%) rotateX(60deg);animation-direction:reverse}@keyframes svelte-15dum4s-gridAnimation{0%{background-position:0 0}100%{background-position:0% 100%}}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Marquee from \\"$lib/components/Marquee.svelte\\";\\nimport \\"../app.css\\";\\nimport ReviewCard from \\"$lib/components/ReviewCard.svelte\\";\\nimport { ISOToName } from \\"$lib/helpers/ISOToName\\";\\nimport Border from \\"$lib/components/Border.svelte\\";\\nconst reviews = [\\n  {\\n    name: \\"Avi\\",\\n    username: \\"@Avi\\",\\n    body: \\"Go Israel! Proud of our achievements.\\",\\n    img: \\"https://avatar.vercel.sh/avi\\"\\n  },\\n  {\\n    name: \\"Fatima\\",\\n    username: \\"@Fatima\\",\\n    body: \\"Palestine deserves recognition and peace.\\",\\n    img: \\"https://avatar.vercel.sh/fatima\\"\\n  },\\n  {\\n    name: \\"David\\",\\n    username: \\"@David\\",\\n    body: \\"Israel is a beacon of innovation and culture.\\",\\n    img: \\"https://avatar.vercel.sh/david\\"\\n  },\\n  {\\n    name: \\"Layla\\",\\n    username: \\"@Layla\\",\\n    body: \\"We need to focus on unity and understanding.\\",\\n    img: \\"https://avatar.vercel.sh/layla\\"\\n  },\\n  {\\n    name: \\"Noah\\",\\n    username: \\"@Noah\\",\\n    body: \\"Israel's resilience is inspiring.\\",\\n    img: \\"https://avatar.vercel.sh/noah\\"\\n  },\\n  {\\n    name: \\"Omar\\",\\n    username: \\"@Omar\\",\\n    body: \\"Palestine's history and culture are rich and vibrant.\\",\\n    img: \\"https://avatar.vercel.sh/omar\\"\\n  }\\n];\\nlet firstRow = reviews.slice(0, reviews.length / 2);\\nlet secondRow = reviews.slice(reviews.length / 2);\\nexport let data;\\n<\/script>\\r\\n\\r\\n<nav\\r\\n\\tclass=\\"border border-b-white/10 border-transparent p-1 animate-marquee text-center text-sm hidden xl:block\\"\\r\\n>\\r\\n\\t<ol class=\\"flex flex-row justify-between animate-marquee\\">\\r\\n\\t\\t<Marquee class=\\"[--duration:45s]\\" pauseOnHover>\\r\\n\\t\\t\\t{#each data.donors as donor}\\r\\n\\t\\t\\t\\t<li class=\\"mx-12\\">\\r\\n\\t\\t\\t\\t\\t<strong>{donor.name}</strong> donated +<strong\\r\\n\\t\\t\\t\\t\\t\\tclass=\\"text-green-400 saturate-50\\"\\r\\n\\t\\t\\t\\t\\t\\t>{donor.amount.toLocaleString()}</strong\\r\\n\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\tclicks for\\r\\n\\t\\t\\t\\t\\t<img\\r\\n\\t\\t\\t\\t\\t\\tsrc=\\"/flags/1x1/{donor.country.toLowerCase()}.svg\\"\\r\\n\\t\\t\\t\\t\\t\\twidth={16}\\r\\n\\t\\t\\t\\t\\t\\theight={16}\\r\\n\\t\\t\\t\\t\\t\\tclass=\\"inline rounded-full mr-1\\"\\r\\n\\t\\t\\t\\t\\t\\talt=\\"Flag of {ISOToName(donor.country)}\\"\\r\\n\\t\\t\\t\\t\\t/>{ISOToName(donor.country)}!\\r\\n\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t{/each}\\r\\n\\t\\t</Marquee>\\r\\n\\t</ol>\\r\\n</nav>\\r\\n\\r\\n<div\\r\\n\\tclass=\\"mx-auto relative container my-3 xl:my-12 bg-black p-3 xl:p-12 rounded-xl xl:box shadow-[0px_0px_50px_50px_#030303]\\"\\r\\n>\\r\\n\\t<!-- <Border borderWidth={1} size={800} anchor={90} /> -->\\r\\n\\t<!-- <div class=\\"bg-gradient-to-br from-[#ffa6c8] via-[#e5a4ff] blur-md to-[#9fe5da] w-full h-full absolute -z-10 left-0 top-0 animate-border-beam\\" /> -->\\r\\n\\t<main class=\\"p-0 xl:p-3 mx-auto container\\">\\r\\n\\t\\t<slot />\\r\\n\\t</main>\\r\\n\\r\\n\\t<footer class=\\"hidden mx-auto container\\">\\r\\n\\t\\t<div\\r\\n\\t\\t\\tclass=\\"relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-20 md:shadow-xl\\"\\r\\n\\t\\t>\\r\\n\\t\\t\\t<Marquee pauseOnHover class=\\"[--duration:20s]\\">\\r\\n\\t\\t\\t\\t{#each firstRow as item}\\r\\n\\t\\t\\t\\t\\t<ReviewCard {...item} />\\r\\n\\t\\t\\t\\t{/each}\\r\\n\\t\\t\\t</Marquee>\\r\\n\\t\\t\\t<Marquee reverse pauseOnHover class=\\"[--duration:20s]\\">\\r\\n\\t\\t\\t\\t{#each secondRow as item}\\r\\n\\t\\t\\t\\t\\t<ReviewCard {...item} />\\r\\n\\t\\t\\t\\t{/each}\\r\\n\\t\\t\\t</Marquee>\\r\\n\\t\\t\\t<div\\r\\n\\t\\t\\t\\tclass=\\"pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#030303] dark:from-background\\"\\r\\n\\t\\t\\t></div>\\r\\n\\t\\t\\t<div\\r\\n\\t\\t\\t\\tclass=\\"pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#030303] dark:from-background\\"\\r\\n\\t\\t\\t></div>\\r\\n\\t\\t</div>\\r\\n\\t</footer>\\r\\n</div>\\r\\n\\r\\n<div class=\\"cont\\">\\r\\n\\t<div class=\\"griddy grid-flip\\"></div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\t.box,\\r\\n\\t.box-glow {\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\toverflow: hidden;\\r\\n\\t\\tz-index: 0;\\r\\n\\t\\tborder-radius: 10px;\\r\\n\\t\\tleft: 50%;\\r\\n\\t\\ttop: 50%;\\r\\n\\t\\ttransform: translate(-50%, -50%);\\r\\n\\t}\\r\\n\\r\\n\\t.box-glow {\\r\\n\\t\\toverflow: hidden;\\r\\n\\t\\t/* Glow Blur */\\r\\n\\t\\tfilter: blur(20px);\\r\\n\\t}\\r\\n\\r\\n\\t.box:before,\\r\\n\\t.box-glow:before {\\r\\n\\t\\tcontent: \\"\\";\\r\\n\\t\\tz-index: -2;\\r\\n\\t\\ttext-align: center;\\r\\n\\t\\ttop: 50%;\\r\\n\\t\\tleft: 50%;\\r\\n\\t\\ttransform: translate(-50%, -50%) rotate(0deg);\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\twidth: 99999px;\\r\\n\\t\\theight: 99999px;\\r\\n\\t\\tbackground-repeat: no-repeat;\\r\\n\\t\\tbackground-position: 0 0;\\r\\n\\t\\t/*border color, change middle color*/\\r\\n\\t\\tbackground-image: conic-gradient(\\r\\n\\t\\t\\trgba(0, 0, 0, 0),\\r\\n\\t\\t\\t#ff69b4,\\r\\n\\t\\t\\t#ffd700,\\r\\n\\t\\t\\t#00ff00,\\r\\n\\t\\t\\t#00ffff,\\r\\n\\t\\t\\t#ff00ff,\\r\\n\\t\\t\\trgba(0, 0, 0, 0) 25%\\r\\n\\t\\t);\\r\\n\\t\\t/* change speed here */\\r\\n\\t\\tanimation: rotate 4s linear infinite;\\r\\n\\t}\\r\\n\\r\\n\\t.box:after {\\r\\n\\t\\tcontent: \\"\\";\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\tz-index: -1;\\r\\n\\t\\t/* border width */\\r\\n\\t\\tleft: 5px;\\r\\n\\t\\ttop: 5px;\\r\\n\\t\\t/* double the px from the border width left */\\r\\n\\t\\twidth: calc(100% - 10px);\\r\\n\\t\\theight: calc(100% - 10px);\\r\\n\\t\\t/*bg color*/\\r\\n\\t\\tbackground: black;\\r\\n\\t\\t/*box border radius*/\\r\\n\\t\\tborder-radius: 7px;\\r\\n\\t}\\r\\n\\r\\n\\t@keyframes rotate {\\r\\n\\t\\t100% {\\r\\n\\t\\t\\ttransform: translate(-50%, -50%) rotate(1turn);\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\t.cont {\\r\\n\\t\\tz-index: -1;\\r\\n\\t\\tborder-radius: 1rem;\\r\\n\\t\\tmargin: 0 auto;\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: 100%;\\r\\n\\t\\toverflow: hidden;\\r\\n\\t\\tbackground-color: #030303;\\r\\n\\t\\tperspective: 7vw;\\r\\n\\t\\tposition: fixed; /* Change to fixed */\\r\\n\\t\\tbottom: 0; /* Ensure it stays at the bottom */\\r\\n\\t\\t/* affects horizon */\\r\\n\\t}\\r\\n\\t.griddy {\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\ttop: 0;\\r\\n\\t\\tleft: 50%;\\r\\n\\t\\toverflow: hidden;\\r\\n\\t\\twidth: 350%;\\r\\n\\t\\theight: 200%;\\r\\n\\t\\ttransform: translate(-50%, -50%) rotateX(-60deg);\\r\\n\\t\\tbackground-image: linear-gradient(\\r\\n\\t\\t\\t\\tto right,\\r\\n\\t\\t\\t\\trgba(255, 0, 255, 0.5) 1px,\\r\\n\\t\\t\\t\\ttransparent 3em\\r\\n\\t\\t\\t),\\r\\n\\t\\t\\tlinear-gradient(\\r\\n\\t\\t\\t\\tto bottom,\\r\\n\\t\\t\\t\\trgba(0, 255, 255, 0.5) 1px,\\r\\n\\t\\t\\t\\ttransparent 3em\\r\\n\\t\\t\\t);\\r\\n\\t\\tbackground-size: 10% 10%;\\r\\n\\t\\tanimation: gridAnimation 24s linear infinite;\\r\\n\\t}\\r\\n\\r\\n\\t.grid-flip {\\r\\n\\t\\ttop: 100%;\\r\\n\\t\\ttransform: translate(-50%, -50%) rotateX(60deg);\\r\\n\\t\\tanimation-direction: reverse;\\r\\n\\t}\\r\\n\\r\\n\\t@keyframes gridAnimation {\\r\\n\\t\\t0% {\\r\\n\\t\\t\\tbackground-position: 0 0;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\t100% {\\r\\n\\t\\t\\tbackground-position: 0% 100%;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA2KC,WAAW,qBAAO,CACjB,IAAK,CACJ,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,OAAO,KAAK,CAC9C,CACD,CAEA,oBAAM,CACL,OAAO,CAAE,EAAE,CACX,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,MAAM,CAChB,gBAAgB,CAAE,OAAO,CACzB,WAAW,CAAE,GAAG,CAChB,QAAQ,CAAE,KAAK,CACf,MAAM,CAAE,CAET,CACA,sBAAQ,CACP,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,GAAG,CACT,QAAQ,CAAE,MAAM,CAChB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,QAAQ,MAAM,CAAC,CAChD,gBAAgB,CAAE;AACpB,IAAI,EAAE,CAAC,KAAK,CAAC;AACb,IAAI,KAAK,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC;AAC/B,IAAI,WAAW,CAAC,GAAG;AACnB,IAAI,CAAC;AACL,GAAG;AACH,IAAI,EAAE,CAAC,MAAM,CAAC;AACd,IAAI,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC;AAC/B,IAAI,WAAW,CAAC,GAAG;AACnB,IAAI,CACF,eAAe,CAAE,GAAG,CAAC,GAAG,CACxB,SAAS,CAAE,4BAAa,CAAC,GAAG,CAAC,MAAM,CAAC,QACrC,CAEA,yBAAW,CACV,GAAG,CAAE,IAAI,CACT,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,QAAQ,KAAK,CAAC,CAC/C,mBAAmB,CAAE,OACtB,CAEA,WAAW,4BAAc,CACxB,EAAG,CACF,mBAAmB,CAAE,CAAC,CAAC,CACxB,CAEA,IAAK,CACJ,mBAAmB,CAAE,EAAE,CAAC,IACzB,CACD"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const reviews = [
    {
      name: "Avi",
      username: "@Avi",
      body: "Go Israel! Proud of our achievements.",
      img: "https://avatar.vercel.sh/avi"
    },
    {
      name: "Fatima",
      username: "@Fatima",
      body: "Palestine deserves recognition and peace.",
      img: "https://avatar.vercel.sh/fatima"
    },
    {
      name: "David",
      username: "@David",
      body: "Israel is a beacon of innovation and culture.",
      img: "https://avatar.vercel.sh/david"
    },
    {
      name: "Layla",
      username: "@Layla",
      body: "We need to focus on unity and understanding.",
      img: "https://avatar.vercel.sh/layla"
    },
    {
      name: "Noah",
      username: "@Noah",
      body: "Israel's resilience is inspiring.",
      img: "https://avatar.vercel.sh/noah"
    },
    {
      name: "Omar",
      username: "@Omar",
      body: "Palestine's history and culture are rich and vibrant.",
      img: "https://avatar.vercel.sh/omar"
    }
  ];
  let firstRow = reviews.slice(0, reviews.length / 2);
  let secondRow = reviews.slice(reviews.length / 2);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `<nav class="border border-b-white/10 border-transparent p-1 animate-marquee text-center text-sm hidden xl:block"><ol class="flex flex-row justify-between animate-marquee">${validate_component(Marquee, "Marquee").$$render(
    $$result,
    {
      class: "[--duration:45s]",
      pauseOnHover: true
    },
    {},
    {
      default: () => {
        return `${each(data.donors, (donor) => {
          return `<li class="mx-12"><strong>${escape(donor.name)}</strong> donated +<strong class="text-green-400 saturate-50">${escape(donor.amount.toLocaleString())}</strong>
					clicks for
					<img src="${"/flags/1x1/" + escape(donor.country.toLowerCase(), true) + ".svg"}"${add_attribute("width", 16, 0)}${add_attribute("height", 16, 0)} class="inline rounded-full mr-1" alt="${"Flag of " + escape(ISOToName(donor.country), true)}">${escape(ISOToName(donor.country))}!
				</li>`;
        })}`;
      }
    }
  )}</ol></nav> <div class="mx-auto relative container my-3 xl:my-12 bg-black p-3 xl:p-12 rounded-xl xl:box shadow-[0px_0px_50px_50px_#030303]">  <main class="p-0 xl:p-3 mx-auto container">${slots.default ? slots.default({}) : ``}</main> <footer class="hidden mx-auto container"><div class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-20 md:shadow-xl">${validate_component(Marquee, "Marquee").$$render(
    $$result,
    {
      pauseOnHover: true,
      class: "[--duration:20s]"
    },
    {},
    {
      default: () => {
        return `${each(firstRow, (item) => {
          return `${validate_component(ReviewCard, "ReviewCard").$$render($$result, Object.assign({}, item), {}, {})}`;
        })}`;
      }
    }
  )} ${validate_component(Marquee, "Marquee").$$render(
    $$result,
    {
      reverse: true,
      pauseOnHover: true,
      class: "[--duration:20s]"
    },
    {},
    {
      default: () => {
        return `${each(secondRow, (item) => {
          return `${validate_component(ReviewCard, "ReviewCard").$$render($$result, Object.assign({}, item), {}, {})}`;
        })}`;
      }
    }
  )} <div class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#030303] dark:from-background"></div> <div class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#030303] dark:from-background"></div></div></footer></div> <div class="cont svelte-15dum4s" data-svelte-h="svelte-kapvlf"><div class="griddy grid-flip svelte-15dum4s"></div> </div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-D5t4jkkt.js.map
