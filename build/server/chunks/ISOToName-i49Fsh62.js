import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function ISOToName(isoCode) {
  const formatter = new Intl.DisplayNames(["en"], { type: "region" });
  if (isoCode === "PS") return "Palestine";
  return formatter.of(isoCode) || void 0;
}

export { ISOToName as I, cn as c };
//# sourceMappingURL=ISOToName-i49Fsh62.js.map
