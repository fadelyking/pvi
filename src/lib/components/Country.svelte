<script lang="ts">
	import Button from "./Button.svelte";
	import Clicks from "./Clicks.svelte";
	import { Ps, Il } from "svelte-flag-icons";
	export let countryName: string = "";
	import { palestineClicks, israelClicks } from "$lib/stores/clicks";

	let israelValue: number;
	let palestineValue: number;
	let total = 0;

	function incrementIsrael() {
		console.log("this is running israel");
		israelClicks.update((n) => n + 1);
		israelClicks.subscribe((value) => {
			israelValue = value;
		});
	}
	function incrementPalestine() {
		console.log("this is running palestine");
		palestineClicks.update((n) => n + 1);
		palestineClicks.subscribe((value) => {
			palestineValue = value;
		});
	}
</script>

<div class="country">
	<div class=" text-white text-3xl">{countryName}</div>
	{#if countryName === "Israel"}
		<Il size={140} class="flag" />
		<Button on:click={incrementIsrael} color="blue" />
		<Clicks clicks={israelValue} />
	{:else}
		<Ps size={140} class="flag" />
		<Button on:click={incrementPalestine} color="green" />
		<Clicks clicks={palestineValue} />
	{/if}
</div>

<style>
	.country {
		display: flex;
		flex-direction: column;
		gap: 1.875rem;
		padding: 1.25rem;
		align-items: center;
	}

	.flag {
		border-radius: 5.625rem;
	}
</style>
