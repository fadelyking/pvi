import { derived, writable } from "svelte/store";

export const israelClicks = writable(0);
export const palestineClicks = writable(0);
export const totalClicks = derived(
	[israelClicks, palestineClicks],
	([a, b]) => a + b
);
