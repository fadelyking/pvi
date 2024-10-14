import { c as create_ssr_component, v as validate_component, a as escape, s as setContext, d as subscribe, b as add_attribute, n as null_to_empty, e as each, f as noop, h as add_styles } from './ssr-BKV7toZk.js';
import { I as ISOToName, c as cn } from './ISOToName-i49Fsh62.js';
import { U as UNDEFINED, N as NAN, P as POSITIVE_INFINITY, a as NEGATIVE_INFINITY, b as NEGATIVE_ZERO, H as HOLE, d as derived, w as writable } from './index-4il32_Ea.js';
import { i as invalidateAll, a as applyAction } from './client-Bquu-9ER.js';
import '@paypal/paypal-js';
import 'vanilla-tilt';
import 'clsx';
import 'tailwind-merge';
import './exports-BGi7-Rnc.js';

/**
 * Revive a value serialized with `devalue.stringify`
 * @param {string} serialized
 * @param {Record<string, (value: any) => any>} [revivers]
 */
function parse(serialized, revivers) {
	return unflatten(JSON.parse(serialized));
}

/**
 * Revive a value flattened with `devalue.stringify`
 * @param {number | any[]} parsed
 * @param {Record<string, (value: any) => any>} [revivers]
 */
function unflatten(parsed, revivers) {
	if (typeof parsed === 'number') return hydrate(parsed, true);

	if (!Array.isArray(parsed) || parsed.length === 0) {
		throw new Error('Invalid input');
	}

	const values = /** @type {any[]} */ (parsed);

	const hydrated = Array(values.length);

	/**
	 * @param {number} index
	 * @returns {any}
	 */
	function hydrate(index, standalone = false) {
		if (index === UNDEFINED) return undefined;
		if (index === NAN) return NaN;
		if (index === POSITIVE_INFINITY) return Infinity;
		if (index === NEGATIVE_INFINITY) return -Infinity;
		if (index === NEGATIVE_ZERO) return -0;

		if (standalone) throw new Error(`Invalid input`);

		if (index in hydrated) return hydrated[index];

		const value = values[index];

		if (!value || typeof value !== 'object') {
			hydrated[index] = value;
		} else if (Array.isArray(value)) {
			if (typeof value[0] === 'string') {
				const type = value[0];

				switch (type) {
					case 'Date':
						hydrated[index] = new Date(value[1]);
						break;

					case 'Set':
						const set = new Set();
						hydrated[index] = set;
						for (let i = 1; i < value.length; i += 1) {
							set.add(hydrate(value[i]));
						}
						break;

					case 'Map':
						const map = new Map();
						hydrated[index] = map;
						for (let i = 1; i < value.length; i += 2) {
							map.set(hydrate(value[i]), hydrate(value[i + 1]));
						}
						break;

					case 'RegExp':
						hydrated[index] = new RegExp(value[1], value[2]);
						break;

					case 'Object':
						hydrated[index] = Object(value[1]);
						break;

					case 'BigInt':
						hydrated[index] = BigInt(value[1]);
						break;

					case 'null':
						const obj = Object.create(null);
						hydrated[index] = obj;
						for (let i = 1; i < value.length; i += 2) {
							obj[value[i]] = hydrate(value[i + 1]);
						}
						break;

					default:
						throw new Error(`Unknown type ${type}`);
				}
			} else {
				const array = new Array(value.length);
				hydrated[index] = array;

				for (let i = 0; i < value.length; i += 1) {
					const n = value[i];
					if (n === HOLE) continue;

					array[i] = hydrate(n);
				}
			}
		} else {
			/** @type {Record<string, any>} */
			const object = {};
			hydrated[index] = object;

			for (const key in value) {
				const n = value[key];
				object[key] = hydrate(n);
			}
		}

		return hydrated[index];
	}

	return hydrate(0);
}

const Border = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = 200 } = $$props;
  let { duration = 15 } = $$props;
  let { anchor = 90 } = $$props;
  let { borderWidth = 1.5 } = $$props;
  let { colorFrom = "#ffaa40" } = $$props;
  let { colorTo = "#9c40ff" } = $$props;
  let { delay = 0 } = $$props;
  let delaySec = delay + "s";
  let { class: className = "" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0) $$bindings.duration(duration);
  if ($$props.anchor === void 0 && $$bindings.anchor && anchor !== void 0) $$bindings.anchor(anchor);
  if ($$props.borderWidth === void 0 && $$bindings.borderWidth && borderWidth !== void 0) $$bindings.borderWidth(borderWidth);
  if ($$props.colorFrom === void 0 && $$bindings.colorFrom && colorFrom !== void 0) $$bindings.colorFrom(colorFrom);
  if ($$props.colorTo === void 0 && $$bindings.colorTo && colorTo !== void 0) $$bindings.colorTo(colorTo);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0) $$bindings.delay(delay);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `<div${add_attribute(
    "class",
    cn(
      "pointer-events-none absolute inset-[0] rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
      // mask styles
      "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
      // pseudo styles
      "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
      className
    ),
    0
  )}${add_styles({
    "--border-width": borderWidth,
    "--size": size,
    "--color-from": colorFrom,
    "--color-to": colorTo,
    "--delay": delaySec,
    "--anchor": anchor,
    "--duration": duration
  })}></div>`;
});
const css = {
  code: ".shine.svelte-ot8iio{background:linear-gradient(\n			90deg,\n			rgba(255, 255, 255, 0.5) 0%,\n			rgba(255, 255, 255, 0) 50%,\n			rgba(255, 255, 255, 0.5) 100%\n		);background-size:200% 100%;animation:svelte-ot8iio-shine 1.5s infinite}@keyframes svelte-ot8iio-shine{0%{background-position:200% 0}100%{background-position:-200% 0}}.game-container.svelte-ot8iio{display:flex;align-items:center;justify-content:space-between;border-radius:0.75rem;padding:1.5625rem;max-width:90vw;margin:0 auto}.progress-bar.svelte-ot8iio{display:flex;width:50vw;max-width:37.5rem;height:0.9375rem;position:relative;overflow:hidden;border-radius:3em}.progress.svelte-ot8iio{height:100%;border-radius:3em;width:var(--progress-width);transition:width 0.1s ease-in-out}",
  map: '{"version":3,"file":"ProgressBar.svelte","sources":["ProgressBar.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let q1 = \\"\\";\\nexport let q2 = \\"\\";\\nexport let q1Clicks = 0;\\nexport let q2Clicks = 0;\\n<\/script>\\n\\n<div\\n\\tclass=\\"border border-white/20 p-6 rounded-xl flex justify-between items-center\\"\\n>\\n\\t<div class=\\"p-1 px-1.5 rounded-full border border-white/40\\">\\n\\t\\t<img\\n\\t\\t\\tclass=\\"select-none rounded-xl\\"\\n\\t\\t\\tid=\\"flag\\"\\n\\t\\t\\twidth={32}\\n\\t\\t\\theight={32}\\n\\t\\t\\tsrc=\\"/flags/1x1/{q1.toLowerCase()}.svg\\"\\n\\t\\t\\talt=\\"Flag\\"\\n\\t\\t/>\\n\\t</div>\\n\\n\\t<!-- Progress bar -->\\n\\t<div class=\\"bg-white/25 h-1 w-full xl:w-[15vw] relative\\">\\n\\t\\t<div\\n\\t\\t\\tclass={`bg-green-400 h-1`}\\n\\t\\t\\tstyle=\\"width: {(q1Clicks / (q1Clicks + q2Clicks)) * 100}%\\"\\n\\t\\t></div>\\n\\t\\t<div\\n\\t\\t\\tclass={`bg-blue-400 h-1 absolute`}\\n\\t\\t\\tstyle=\\"left: {(q1Clicks / (q1Clicks + q2Clicks)) * 100}%; width: {(q2Clicks / (q1Clicks + q2Clicks)) * 100}%\\"\\n\\t\\t></div>\\n\\t\\t{#if q1Clicks > q2Clicks}\\n\\t\\t\\t<div class=\\"shine absolute h-1\\" style=\\"width: {(q1Clicks / (q1Clicks + q2Clicks)) * 100}%\\"></div>\\n\\t\\t{:else if q2Clicks > q1Clicks}\\n\\t\\t\\t<div class=\\"shine absolute h-1\\" style=\\"left: {(q1Clicks / (q1Clicks + q2Clicks)) * 100}%; width: {(q2Clicks / (q1Clicks + q2Clicks)) * 100}%\\"></div>\\n\\t\\t{/if}\\n\\t</div>\\n\\n\\n\\t<div class=\\"p-1 px-1.5 rounded-full border border-white/40\\">\\n\\t\\t<img\\n\\t\\t\\tclass=\\"select-none rounded-xl\\"\\n\\t\\t\\tid=\\"flag\\"\\n\\t\\t\\twidth={32}\\n\\t\\t\\theight={32}\\n\\t\\t\\tsrc=\\"/flags/1x1/{q2.toLowerCase()}.svg\\"\\n\\t\\t\\talt=\\"Flag\\"\\n\\t\\t/>\\n\\t</div>\\n</div>\\n<!-- \\n<div class=\\"hidden game-container drop-shadow-2xl border border-white/20\\">\\n\\t<div class=\\"progress-bar bg-red-400\\">\\n\\t\\t<div\\n\\t\\t\\tclass=\\"progress drop-shadow-2xl bg-blue-400\\"\\n\\t\\t\\tstyle=\\"--progress-width: {progress}%\\"\\n\\t\\t></div>\\n\\t</div>\\n</div> -->\\n\\n<style>\\n\\t.shine {\\n\\t\\tbackground: linear-gradient(\\n\\t\\t\\t90deg,\\n\\t\\t\\trgba(255, 255, 255, 0.5) 0%,\\n\\t\\t\\trgba(255, 255, 255, 0) 50%,\\n\\t\\t\\trgba(255, 255, 255, 0.5) 100%\\n\\t\\t);\\n\\t\\tbackground-size: 200% 100%;\\n\\t\\tanimation: shine 1.5s infinite;\\n\\t}\\n\\n\\t@keyframes shine {\\n\\t\\t0% {\\n\\t\\t\\tbackground-position: 200% 0;\\n\\t\\t}\\n\\t\\t100% {\\n\\t\\t\\tbackground-position: -200% 0;\\n\\t\\t}\\n\\t}\\n\\n\\t.game-container {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: space-between;\\n\\t\\tborder-radius: 0.75rem;\\n\\t\\tpadding: 1.5625rem;\\n\\t\\tmax-width: 90vw;\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\n\\t.progress-bar {\\n\\t\\tdisplay: flex;\\n\\t\\twidth: 50vw;\\n\\t\\tmax-width: 37.5rem;\\n\\t\\theight: 0.9375rem;\\n\\t\\tposition: relative;\\n\\t\\toverflow: hidden;\\n\\t\\tborder-radius: 3em;\\n\\t}\\n\\n\\t.progress {\\n\\t\\theight: 100%;\\n\\t\\tborder-radius: 3em;\\n\\t\\twidth: var(--progress-width);\\n\\t\\ttransition: width 0.1s ease-in-out;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA4DC,oBAAO,CACN,UAAU,CAAE;AACd,GAAG,KAAK,CAAC;AACT,GAAG,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC;AAC/B,GAAG,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC;AAC9B,GAAG,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI;AAChC,GAAG,CACD,eAAe,CAAE,IAAI,CAAC,IAAI,CAC1B,SAAS,CAAE,mBAAK,CAAC,IAAI,CAAC,QACvB,CAEA,WAAW,mBAAM,CAChB,EAAG,CACF,mBAAmB,CAAE,IAAI,CAAC,CAC3B,CACA,IAAK,CACJ,mBAAmB,CAAE,KAAK,CAAC,CAC5B,CACD,CAEA,6BAAgB,CACf,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,aAAa,CAC9B,aAAa,CAAE,OAAO,CACtB,OAAO,CAAE,SAAS,CAClB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,CAAC,CAAC,IACX,CAEA,2BAAc,CACb,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,OAAO,CAClB,MAAM,CAAE,SAAS,CACjB,QAAQ,CAAE,QAAQ,CAClB,QAAQ,CAAE,MAAM,CAChB,aAAa,CAAE,GAChB,CAEA,uBAAU,CACT,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,IAAI,gBAAgB,CAAC,CAC5B,UAAU,CAAE,KAAK,CAAC,IAAI,CAAC,WACxB"}'
};
const ProgressBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { q1 = "" } = $$props;
  let { q2 = "" } = $$props;
  let { q1Clicks = 0 } = $$props;
  let { q2Clicks = 0 } = $$props;
  if ($$props.q1 === void 0 && $$bindings.q1 && q1 !== void 0) $$bindings.q1(q1);
  if ($$props.q2 === void 0 && $$bindings.q2 && q2 !== void 0) $$bindings.q2(q2);
  if ($$props.q1Clicks === void 0 && $$bindings.q1Clicks && q1Clicks !== void 0) $$bindings.q1Clicks(q1Clicks);
  if ($$props.q2Clicks === void 0 && $$bindings.q2Clicks && q2Clicks !== void 0) $$bindings.q2Clicks(q2Clicks);
  $$result.css.add(css);
  return `<div class="border border-white/20 p-6 rounded-xl flex justify-between items-center"><div class="p-1 px-1.5 rounded-full border border-white/40"><img class="select-none rounded-xl" id="flag"${add_attribute("width", 32, 0)}${add_attribute("height", 32, 0)} src="${"/flags/1x1/" + escape(q1.toLowerCase(), true) + ".svg"}" alt="Flag"></div>  <div class="bg-white/25 h-1 w-full xl:w-[15vw] relative"><div class="${escape(null_to_empty(`bg-green-400 h-1`), true) + " svelte-ot8iio"}" style="${"width: " + escape(q1Clicks / (q1Clicks + q2Clicks) * 100, true) + "%"}"></div> <div class="${escape(null_to_empty(`bg-blue-400 h-1 absolute`), true) + " svelte-ot8iio"}" style="${"left: " + escape(q1Clicks / (q1Clicks + q2Clicks) * 100, true) + "%; width: " + escape(q2Clicks / (q1Clicks + q2Clicks) * 100, true) + "%"}"></div> ${q1Clicks > q2Clicks ? `<div class="shine absolute h-1 svelte-ot8iio" style="${"width: " + escape(q1Clicks / (q1Clicks + q2Clicks) * 100, true) + "%"}"></div>` : `${q2Clicks > q1Clicks ? `<div class="shine absolute h-1 svelte-ot8iio" style="${"left: " + escape(q1Clicks / (q1Clicks + q2Clicks) * 100, true) + "%; width: " + escape(q2Clicks / (q1Clicks + q2Clicks) * 100, true) + "%"}"></div>` : ``}`}</div> <div class="p-1 px-1.5 rounded-full border border-white/40"><img class="select-none rounded-xl" id="flag"${add_attribute("width", 32, 0)}${add_attribute("height", 32, 0)} src="${"/flags/1x1/" + escape(q2.toLowerCase(), true) + ".svg"}" alt="Flag"></div></div> `;
});
function deserialize(result) {
  const parsed = JSON.parse(result);
  if (parsed.data) {
    parsed.data = parse(parsed.data);
  }
  return parsed;
}
function clone(element) {
  return (
    /** @type {T} */
    HTMLElement.prototype.cloneNode.call(element)
  );
}
function enhance(form_element, submit = () => {
}) {
  const fallback_callback = async ({
    action,
    result,
    reset = true,
    invalidateAll: shouldInvalidateAll = true
  }) => {
    if (result.type === "success") {
      if (reset) {
        HTMLFormElement.prototype.reset.call(form_element);
      }
      if (shouldInvalidateAll) {
        await invalidateAll();
      }
    }
    if (location.origin + location.pathname === action.origin + action.pathname || result.type === "redirect" || result.type === "error") {
      applyAction();
    }
  };
  async function handle_submit(event) {
    const method = event.submitter?.hasAttribute("formmethod") ? (
      /** @type {HTMLButtonElement | HTMLInputElement} */
      event.submitter.formMethod
    ) : clone(form_element).method;
    if (method !== "post") return;
    event.preventDefault();
    const action = new URL(
      // We can't do submitter.formAction directly because that property is always set
      event.submitter?.hasAttribute("formaction") ? (
        /** @type {HTMLButtonElement | HTMLInputElement} */
        event.submitter.formAction
      ) : clone(form_element).action
    );
    const enctype = event.submitter?.hasAttribute("formenctype") ? (
      /** @type {HTMLButtonElement | HTMLInputElement} */
      event.submitter.formEnctype
    ) : clone(form_element).enctype;
    const form_data = new FormData(form_element);
    const submitter_name = event.submitter?.getAttribute("name");
    if (submitter_name) {
      form_data.append(submitter_name, event.submitter?.getAttribute("value") ?? "");
    }
    const controller = new AbortController();
    let cancelled = false;
    const cancel = () => cancelled = true;
    const callback = await submit({
      action,
      cancel,
      controller,
      formData: form_data,
      formElement: form_element,
      submitter: event.submitter
    }) ?? fallback_callback;
    if (cancelled) return;
    let result;
    try {
      const headers = new Headers({
        accept: "application/json",
        "x-sveltekit-action": "true"
      });
      if (enctype !== "multipart/form-data") {
        headers.set(
          "Content-Type",
          /^(:?application\/x-www-form-urlencoded|text\/plain)$/.test(enctype) ? enctype : "application/x-www-form-urlencoded"
        );
      }
      const body = enctype === "multipart/form-data" ? form_data : new URLSearchParams(form_data);
      const response = await fetch(action, {
        method: "POST",
        headers,
        cache: "no-store",
        body,
        signal: controller.signal
      });
      result = deserialize(await response.text());
      if (result.type === "error") result.status = response.status;
    } catch (error) {
      if (
        /** @type {any} */
        error?.name === "AbortError"
      ) return;
      result = { type: "error", error };
    }
    callback({
      action,
      formData: form_data,
      formElement: form_element,
      update: (opts) => fallback_callback({
        action,
        result,
        reset: opts?.reset,
        invalidateAll: opts?.invalidateAll
      }),
      // @ts-expect-error generic constraints stuff we don't care about
      result
    });
  }
  HTMLFormElement.prototype.addEventListener.call(form_element, "submit", handle_submit);
  return {
    destroy() {
      HTMLFormElement.prototype.removeEventListener.call(form_element, "submit", handle_submit);
    }
  };
}
const Donate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selectedPackage;
  let { q1 = "" } = $$props;
  let { q2 = "" } = $$props;
  const packages = [
    { amount: 1e3, price: 1 },
    { amount: 1e4, price: 10 },
    { amount: 5e4, price: 50 },
    { amount: 1e5, price: 100 }
  ];
  const formFieldTwo = [
    {
      label: "Display Name",
      name: "display-name",
      placeholder: "Display Name",
      type: "text",
      required: false
    },
    {
      label: "Email",
      name: "email",
      placeholder: "Email",
      type: "text",
      required: true
    },
    {
      label: "Mobile Phone",
      name: "mobile-phone",
      placeholder: "Mobile Phone",
      type: "text",
      required: false,
      optionalText: "By entering a phone number, you consent to receive text messages"
    },
    {
      label: "Message",
      name: "message",
      placeholder: "Message",
      type: "text",
      required: false,
      isTextarea: true
    }
  ];
  function handlePackageSelect() {
    const selectedPkg = packages.find((pkg) => pkg.amount === selectedPackage);
    selectedPkg ? selectedPkg.price : 1;
  }
  if ($$props.q1 === void 0 && $$bindings.q1 && q1 !== void 0) $$bindings.q1(q1);
  if ($$props.q2 === void 0 && $$bindings.q2 && q2 !== void 0) $$bindings.q2(q2);
  selectedPackage = -1;
  {
    handlePackageSelect();
  }
  return `<form id="donate-form" class="border relative group hover:border-white/50 transition border-white/20 rounded-lg p-4 flex flex-col" method="POST" action="?/donate">${validate_component(Border, "Border").$$render(
    $$result,
    {
      size: 150,
      duration: 5,
      class: "group-hover:opacity-100 opacity-0 transition"
    },
    {},
    {}
  )} <h2 class="font-semibold text-xl" data-svelte-h="svelte-tusgii">Boost your clicks with a donation below.</h2> <small data-svelte-h="svelte-4aa61y">Select the amount of clicks you want.</small> <br> <br> <div class="flex flex-col gap-2 my-3"><select class="border border-white/20 rounded-md p-2 bg-black text-white"><option${add_attribute("value", -1, 0)} data-svelte-h="svelte-1bfr1tn">Select clicks</option>${each(packages, (pkg) => {
    return `<option${add_attribute("value", pkg.amount, 0)}>+${escape(pkg.amount.toLocaleString())} clicks</option>`;
  })}</select></div>   ${selectedPackage >= -1 ? `<input type="hidden" name="amount"${add_attribute("value", selectedPackage, 0)}> <div>${each(formFieldTwo, (field) => {
    return `<label class="mb-6"><div class="font-bold uppercase opacity-80 text-xs">${escape(field.label)}:<em class="text-red-600 font-black">${escape(field.required ? "*" : "")}</em></div> ${field.isTextarea ? `<textarea class="w-full mt-1 h-24 border border-white/20 rounded-md p-2 bg-black text-white"${add_attribute("name", field.name, 0)}${add_attribute("placeholder", field.placeholder, 0)}></textarea>` : `<input class="w-full border border-white/20 rounded-md p-2 bg-black text-white"${add_attribute("type", field.type, 0)}${add_attribute("name", field.name, 0)}${add_attribute("placeholder", field.placeholder, 0)}>`} ${field.optionalText ? `<div class="text-xs text-white">${escape(field.optionalText)} </div>` : ``} </label>`;
  })} <div class="font-bold uppercase opacity-80 text-xs" data-svelte-h="svelte-irvmxp">Country<em class="text-red-600 font-black"></em></div> <select class="w-full border border-white/20 rounded-md p-2 bg-black text-white" name="country"><option value="" data-svelte-h="svelte-aoozsu">Choose a country</option><option${add_attribute("value", q1, 0)}>${escape(ISOToName(q1))}</option><option${add_attribute("value", q2, 0)}>${escape(ISOToName(q2))}</option></select> <div data-svelte-h="svelte-ti78jj"><div class="mt-8"><input type="checkbox" id="recentUpdates" class="mr-2" name="receive-update"> <label for="recentUpdates" class="font-medium">I want periodic updates on who is winning</label></div> <div><input type="checkbox" class="mr-2" id="anonymous" name="anonymous"> <label for="anonymous" class="font-medium">Keep my donation anonymous</label></div></div></div>` : ``} <div class="${escape(
    selectedPackage >= 0 ? "" : "opacity-50 cursor-not-allowed pointer-events-none",
    true
  ) + " flex items-center justify-center mt-4 bg-black/25 rounded-xl p-3 " + escape(selectedPackage >= -1 ? "" : "hidden", true)}"><div id="paypal" class="mt-6"></div></div></form>`;
});
const IL = writable(0);
const PS = writable(0);
derived(
  [IL, PS],
  ([a, b]) => a + b
);
const clickStores = {
  IL,
  PS
};
const Country = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { clicks } = $$props;
  let { countryISO } = $$props;
  if ($$props.clicks === void 0 && $$bindings.clicks && clicks !== void 0) $$bindings.clicks(clicks);
  if ($$props.countryISO === void 0 && $$bindings.countryISO && countryISO !== void 0) $$bindings.countryISO(countryISO);
  return `<div><br> <h3 class="text-white font-bold text-3xl">${escape(ISOToName(countryISO))}</h3> <p class="text-center italic font-light text-xl">${escape(clicks)} clicks</p></div>`;
});
const Particle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options } = $$props;
  let containerElement;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  return `<div class="z-50"${add_attribute("this", containerElement, 0)}>${slots.default ? slots.default({}) : `Hello`}</div>`;
});
const dominantColors = {
  IL: "#FFFFFF",
  // Replace with actual dominant color for Israel
  PS: "#000000"
  // Replace with actual dominant color for Palestine
  // Add other countries and their dominant colors as needed
};
const winningCountry = derived(
  Object.values(clickStores),
  ($clickStores) => {
    const entries = Object.entries($clickStores);
    const [winnerISO, winnerClicks] = entries.reduce(
      (prev, curr) => curr[1] > prev[1] ? curr : prev,
      ["", 0]
    );
    return {
      iso: winnerISO,
      clicks: winnerClicks,
      dominantColor: dominantColors[winnerISO] || "#000000"
      // Default color if not found
    };
  }
);
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dominantColor;
  let particleName;
  let $winningCountry, $$unsubscribe_winningCountry;
  $$unsubscribe_winningCountry = subscribe(winningCountry, (value) => $winningCountry = value);
  let flagElement;
  let { countryISO } = $$props;
  let { clicks } = $$props;
  console.log($winningCountry.clicks);
  if ($$props.countryISO === void 0 && $$bindings.countryISO && countryISO !== void 0) $$bindings.countryISO(countryISO);
  if ($$props.clicks === void 0 && $$bindings.clicks && clicks !== void 0) $$bindings.clicks(clicks);
  dominantColor = "transparent";
  particleName = `flags/4x3/${countryISO.toLowerCase()}.svg`;
  $$unsubscribe_winningCountry();
  return ` ${validate_component(Particle, "Particle").$$render(
    $$result,
    {
      options: {
        particle: particleName,
        speedHorz: 5,
        speedUp: 0.5
      }
    },
    {},
    {
      default: () => {
        return `<form method="POST" action="?/click" class="form relative"><div class="absolute w-full h-full -z-10 blur-xl" style="${"background: " + escape(dominantColor, true) + ";opacity: 0.8"}"></div> <button class="border border-white/10 bg-black/50 active:scale-90 transition hover:scale-105 p-6 rounded-xl" style=""><div class="flex flex-col items-center" style=""><input type="hidden" name="iso"${add_attribute("value", countryISO, 0)}> ${countryISO ? `<img class="select-none rounded-xl" style="border:4px solid hotpink;25px:80px; -webkit-mask: conic-gradient(at 25px 25px,#0000 75%,#000 0) 0 0/calc(100% - 25px) calc(100% - 25px), linear-gradient(#000 0 0) content-box; border: 4px solid transparent; border-top-color: red; border-right-color: green; border-bottom-color: blue; border-left-color: yellow; box-sizing: border-box; " id="flag"${add_attribute("width", 128, 0)}${add_attribute("height", 128, 0)} src="${"/flags/1x1/" + escape(countryISO.toLowerCase(), true) + ".svg"}" alt="Flag"${add_attribute("this", flagElement, 0)}>  ` : ``} ${validate_component(Country, "Country").$$render($$result, { countryISO, clicks }, {}, {})} </div></button></form>`;
      }
    }
  )}`;
});
const Leaderboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let flagElement;
  let { donors } = $$props;
  if ($$props.donors === void 0 && $$bindings.donors && donors !== void 0) $$bindings.donors(donors);
  return `<div class="rounded-lg p-4 h-1/2"><h2 class="font-semibold text-center text-xl mb-2" data-svelte-h="svelte-7jond9">Leaderboards</h2> <ul class="text-sm">${each(donors, (donor) => {
    return `<li class="odd:bg-black/15 p-1 rounded-md flex items-center gap-2"><img class="select-none" id="flag"${add_attribute("width", 30, 0)}${add_attribute("height", 30, 0)} src="${"/flags/1x1/" + escape(donor.country.toLowerCase(), true) + ".svg"}" alt="Flag"${add_attribute("this", flagElement, 0)}> <strong>${escape(donor.name)}</strong> ${escape(donor.amount.toLocaleString())} ${escape(ISOToName(donor.country))} </li>`;
  })}</ul></div> <div class="rounded-lg h-full"><h2 class="font-semibold text-center text-xl mb-2" data-svelte-h="svelte-1f6d985">Messages</h2> <div class="border border-white/20 rounded-lg p-2 h-1/2 overflow-auto"><ul class="text-sm">${each(donors, (donor) => {
    return `<li class="odd:bg-black/15 p-1 rounded-md flex flex-col gap-1 items-start"><div class="flex gap-1 items-center"><img class="select-none" id="flag"${add_attribute("width", 16, 0)}${add_attribute("height", 16, 0)} src="${"/flags/1x1/" + escape(donor.country.toLowerCase(), true) + ".svg"}" alt="Flag"${add_attribute("this", flagElement, 0)}> <strong>${escape(donor.name)}:</strong></div> <span class="max-w-64">${escape(donor.message)}</span> </li>`;
  })}</ul></div></div>`;
});
function optimistikit({ key = "default", enhance: enhance$1 = enhance } = {}) {
  const { subscribe: subscribe2, update } = writable();
  const updates = /* @__PURE__ */ new Set();
  let og_data;
  function trigger() {
    update((data) => {
      let final_data = structuredClone(og_data ?? data);
      updates.forEach((update2) => {
        if (update2.data) {
          final_data = update2.data;
        } else {
          update2.optimistic_update(final_data);
          update2.data = final_data;
        }
      });
      return final_data;
    });
  }
  const abort_controllers = /* @__PURE__ */ new WeakMap();
  const updates_fns = /* @__PURE__ */ new WeakMap();
  function optimistic_action(node, optimistic_fn) {
    let fn = optimistic_fn;
    const ret = enhance$1(node, (props) => {
      const key2 = node.dataset.key;
      if (key2) {
        abort_controllers.get(props.formElement)?.abort();
      }
      abort_controllers.set(props.formElement, props.controller);
      const update_fn = { optimistic_update: (data) => fn(data, props) };
      if (!updates_fns.has(props.formElement)) {
        updates_fns.set(props.formElement, key2 != null ? /* @__PURE__ */ new Map([[key2, /* @__PURE__ */ new Set()]]) : /* @__PURE__ */ new Set());
      }
      const set_or_map = updates_fns.get(props.formElement);
      if (set_or_map instanceof Map) {
        set_or_map.get(key2).add(update_fn);
      } else {
        set_or_map.add(update_fn);
      }
      updates.add(update_fn);
      trigger();
      return async ({ action, result }) => {
        if (key2) {
          const set_or_map2 = updates_fns.get(props.formElement);
          if (set_or_map2 instanceof Map) {
            for (const update_fn2 of set_or_map2.get(key2).values?.() ?? []) {
              updates.delete(update_fn2);
            }
          }
        } else {
          updates.delete(update_fn);
        }
        await invalidateAll();
        if (location.origin + location.pathname === action.origin + action.pathname || result.type === "redirect" || result.type === "error") {
          applyAction();
        }
        trigger();
      };
    });
    return {
      update(new_fn) {
        fn = new_fn;
      },
      destroy: ret.destroy
    };
  }
  setContext(key, {
    optimistic_action
  });
  return {
    optimistic(data) {
      og_data = data;
      trigger();
      return { subscribe: subscribe2 };
    },
    enhance: optimistic_action
  };
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let optimistic_data;
  let totalFirstCountry;
  let totalSecondCountry;
  let generalTotal;
  let $optimistic_data, $$unsubscribe_optimistic_data = noop, $$subscribe_optimistic_data = () => ($$unsubscribe_optimistic_data(), $$unsubscribe_optimistic_data = subscribe(optimistic_data, ($$value) => $optimistic_data = $$value), optimistic_data);
  let { data } = $$props;
  const { enhance: enhance2, optimistic } = optimistikit();
  const AmountFirstCountry = data.donorsFirstCountry.map((donor) => parseInt(donor.amount)).reduce((acc, amount) => acc + amount, 0);
  const AmountSecondCountry = data.donorsSecondCountry.map((donor) => parseInt(donor.amount)).reduce((acc, amount) => acc + amount, 0);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$subscribe_optimistic_data(optimistic_data = optimistic(data));
  data.clicks.length;
  totalFirstCountry = AmountFirstCountry + data.firstCountry.length;
  totalSecondCountry = AmountSecondCountry + data.secondCountry.length;
  generalTotal = totalFirstCountry + totalSecondCountry;
  $$unsubscribe_optimistic_data();
  return `<span class="pointer-events-none xl:text-left z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent" data-svelte-h="svelte-dnr9w7">Countries at War</span> <div class="flex flex-col xl:flex-row justify-between"><div class="xl:block hidden">${validate_component(Leaderboard, "Leaderboard").$$render($$result, { donors: data.donors }, {}, {})}</div> <div class="grid grid-cols-1 gap-3 xl:gap-12 justify-center place-items-center"><h2 class="text-4xl font-black">${escape(ISOToName($optimistic_data.q1))} <em class="font-normal not-italic" data-svelte-h="svelte-xkdqxd">vs.</em> ${escape(ISOToName($optimistic_data.q2))}</h2> <div class="flex flex-col gap-3"><div class="flex flex-row justify-between gap-3">${validate_component(Form, "Form").$$render(
    $$result,
    {
      countryISO: $optimistic_data.q1,
      clicks: $optimistic_data.firstCountry.length
    },
    {},
    {}
  )} ${validate_component(Form, "Form").$$render(
    $$result,
    {
      countryISO: $optimistic_data.q2,
      clicks: $optimistic_data.secondCountry.length
    },
    {},
    {}
  )}</div> <span class="my-12"></span> <p class="font-black text-4xl">${escape(Intl.NumberFormat(void 0).format(generalTotal))} clicks</p> ${validate_component(ProgressBar, "ProgressBar").$$render(
    $$result,
    {
      q1: data.q1,
      q2: data.q2,
      q1Clicks: totalFirstCountry,
      q2Clicks: totalSecondCountry,
      progress: totalFirstCountry - totalSecondCountry + 50
    },
    {},
    {}
  )}</div></div> <div class="flex justify-center xl:mt-0 mt-12">${validate_component(Donate, "Donate").$$render($$result, { q1: data.q1, q2: data.q2 }, {}, {})}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-o9xNlKfa.js.map
