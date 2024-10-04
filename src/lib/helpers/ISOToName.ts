export function ISOToName(isoCode: string): string | undefined {
	const formatter = new Intl.DisplayNames(["en"], { type: "region" });

	if (isoCode === "PS") return "Palestine";

	return formatter.of(isoCode) || undefined;
}
