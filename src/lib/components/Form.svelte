<script lang="ts">
	import { enhance } from "$app/forms";
	import { incrementByISO } from "$lib/stores/clicks";
	import Button from "$lib/components/Button.svelte";
	import Country from "$lib/components/Country.svelte";
	// TODO: Dynamic flags
	import { Ps } from "svelte-flag-icons";
	import { Il } from "svelte-flag-icons";

	import VanillaTilt from "vanilla-tilt";

	import { onMount } from "svelte";

	$: dominantColor = "transparent";

	onMount(() => {
		//@ts-ignore
		VanillaTilt.init(document.querySelectorAll(".form"), {
			reverse: true,
			max: 15,
			speed: 100,
		});
	});

	export let countryISO: string;
	export let clicks: number;

	const MAP = [
		"from-green-400 via-green-400/25",
		"from-blue-600 via-blue-600/25",
	];
	import { Confetti } from "svelte-confetti";

	let confetti = false;
	function click() {
		incrementByISO(countryISO);
		// TODO: Get flag image based on countryISO

		confetti = true;

		setTimeout(() => {
			confetti = false;
		}, 1000);
	}

	let flagElement: HTMLElement;
</script>

{#if confetti}
	<div class="absolute inset-0 pointer-events-none z-50">
		<Confetti
			colorArray={[
				"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjs5EpWI0Ifpgl3ZzZfq_G_I8YTuz9_pfiPw&s)",
			]}
			amount={50}
			duration={5000}
			fallDistance="100vh"
		/>
	</div>
{/if}

<form method="POST" action="?/click" use:enhance class="form">
	<button
		on:click={click}
		class="border border-black/75 active:scale-90 transition hover:scale-105 p-6 rounded-xl bg-gradient-to-br {MAP[
			countryISO === 'PS' ? 0 : 1
		]}"
	>
		<div class="flex flex-col items-center">
			<input type="hidden" name="iso" value={countryISO} />
			{dominantColor}
			{#if countryISO}
				<span
					id="flag"
					bind:this={flagElement}
					class="fi mb-2 fi-{countryISO.toLowerCase()}"
					style="font-size: 5em"
				/>
				<!-- TODO: Based on flag, get dominant color -->
			{/if}

			<Country {countryISO} {clicks} />

			<!-- <Button
                    classNames="bg-gradient-to-br {countryISO === 'PS'
                        ? 'from-green-400'
                        : 'from-blue-600'}  px-12 my-4 hover:shadow-xl transition hover:saturate-150 active:scale-90"
                    on:click={() => incrementByISO(countryISO)}
                /> -->
		</div>
	</button>
</form>
