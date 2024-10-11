import { derived } from "svelte/store";
import { clickStores } from "$lib/stores/clicks";

interface WinningCountry {
    iso: string;
    clicks: number;
    dominantColor: string;
}

const dominantColors: { [key: string]: string } = {
    IL: "#FFFFFF", // Replace with actual dominant color for Israel
    PS: "#000000", // Replace with actual dominant color for Palestine
    // Add other countries and their dominant colors as needed
};

export const winningCountry = derived(
    Object.values(clickStores),
    ($clickStores): WinningCountry => {
        const entries = Object.entries($clickStores);
        const [winnerISO, winnerClicks] = entries.reduce(
            (prev, curr) => (curr[1] > prev[1] ? curr : prev),
            ["", 0]
        );

        return {
            iso: winnerISO,
            clicks: winnerClicks,
            dominantColor: dominantColors[winnerISO] || "#000000", // Default color if not found
        };
    }
);
