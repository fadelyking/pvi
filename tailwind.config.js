import flowbitePlugin from "flowbite/plugin";

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: "selector",
	theme: {
		extend: {
			animation: {
				grid: "grid 15s linear infinite",
				"border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
				marquee: "marquee var(--duration) linear infinite",
				"marquee-vertical": "marquee-vertical var(--duration) linear infinite",
			},
			keyframes: {
				grid: {
					"0%": { transform: "translateY(-50%)" },
					"100%": { transform: "translateY(0)" },
				},
				"border-beam": {
					"100%": {
						"offset-distance": "100%",
					},
				},
				marquee: {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(calc(-100% - var(--gap)))" },
				},
				"marquee-vertical": {
					from: { transform: "translateY(0)" },
					to: { transform: "translateY(calc(-100% - var(--gap)))" },
				},
			},
		},
	},

	plugins: [],
};
