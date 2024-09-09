import { derived, get, writable, type Writable } from "svelte/store";

// Hardcoded values for testing
export const IL = writable(0);
export const PS = writable(0);

export const totalClicks = derived(
	[IL, PS],
	([a, b]) => a + b
);

export const clickStores: { [key: string]: Writable<number> } = {
    IL: IL,
    PS: PS
};

export function getClicksByISO(iso: string): number | undefined {
    const store = clickStores[iso];
    return store ? get(store) : undefined;
}

export function incrementByISO(iso: string) {
    const store = clickStores[iso];
    if (store) {
        store.update((n) => n + 1);
		store.subscribe((value) => {
			store.set(value);
		})
    }
}