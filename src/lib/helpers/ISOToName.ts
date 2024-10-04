export function ISOToName(isoCode: string): string | undefined {
    const formatter = new Intl.DisplayNames(['en'], { type: 'region' });

    if (isoCode === "PS") return "Palestine";
    
    console.log(isoCode);
    
    return formatter.of(isoCode) || undefined;
}