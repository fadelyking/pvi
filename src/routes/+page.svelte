<script lang="ts">
	import "../app.css";
	import Country from "$lib/components/Country.svelte";
	import TotalClicks from "$lib/components/TotalClicks.svelte";
	import ProgressBar from "$lib/components/ProgressBar.svelte";
	import { Ps, Il } from "svelte-flag-icons";
	import type { PageData } from './$types';
	export let data: PageData;
	console.log(data);
	// TODOS:
	// CHANGE THE INDEX OF THE CIRCLE DIVS SO THAT THEY DO NOT COVER ITEMS

	import { clickStores, incrementByISO } from "$lib/stores/clicks";
    import Button from "$lib/components/Button.svelte";
    import { enhance } from "$app/forms";
</script>

<div class="grid h-screen place-items-center grid-cols-3 gap-32">
	<div class="flex flex-col items-center">
		<Ps size={128} />
		<Country countryISO="PS" />
		
		<form method="POST" action="?/click" use:enhance>
			<input type="hidden" name="iso" value="PS" />
			<Button on:click={() => incrementByISO("PS")}></Button>
		</form>
	</div>

	<div>
		<TotalClicks />
		<ProgressBar />
	</div>

	<div class="flex flex-col items-center">
		<Il size={128} />
		<Country countryISO="IL" />
		<form method="POST" action="?/click" use:enhance>
			<input type="hidden" name="iso" value="IL" />
			<Button on:click={() => incrementByISO("IL")}></Button>
		</form>
	</div>
</div>

<div class="color"></div>
<div class="color-2"></div>
<div class="color-3"></div>
<div class="color-4"></div>

<style>
	.color {
		height: 50rem;
		width: 50rem;
		background-image: radial-gradient(closest-side, #14ac81, #003840);
		opacity: 50%;
		position: absolute;
		top: -37.5rem;
		left: 15%;
	}

	.color-2 {
		height: 43.75rem;
		width: 43.75rem;
		background-image: radial-gradient(closest-side, #14ac81, #003840);
		opacity: 50%;
		position: absolute;
		top: 0rem;
		left: -37.5rem;
		overflow: hidden;
	}

	.color-3 {
		height: 43.75rem;
		width: 43.75rem;
		background-image: radial-gradient(closest-side, white, #003840);
		opacity: 30%;
		position: absolute;
		top: -31.25rem;
		right: -25rem;
	}

	.color-4 {
		height: 43.75rem;
		width: 43.75rem;
		background-image: radial-gradient(closest-side, white, #003840);
		opacity: 20%;
		position: absolute;
		top: 12.5rem;
		right: -37.5rem;
	}
</style>
