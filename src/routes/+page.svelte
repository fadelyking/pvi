<script lang="ts">
	import "../app.css";
	import Country from "$lib/components/Country.svelte";
	import ProgressBar from "$lib/components/ProgressBar.svelte";
	import { Ps, Il } from "svelte-flag-icons";
	import type { PageData /*, FormData*/ } from "./$types";
	import Button from "$lib/components/Button.svelte";
	import { enhance } from "$app/forms";

	import Form from "$lib/components/Form.svelte";

	export let data: PageData;
	// export let form: FormData;

	$: totalClicked = data.palestine.length + data.israel.length;

	// TODOS:
	// CHANGE THE INDEX OF THE CIRCLE DIVS SO THAT THEY DO NOT COVER ITEMS
</script>

<div class="grid h-screen place-items-center grid-cols-3 gap-32">
	<Form countryISO="PS" clicks={data.palestine.length} />

	<div class="flex flex-col items-center gap-3">
		<span class="text-center font-black text-5xl px-3"
			>{Intl.NumberFormat(undefined).format(totalClicked)} clicks</span
		>
		<br />
		<ProgressBar />
	</div>

	<Form countryISO="IL" clicks={data.israel.length} />
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
