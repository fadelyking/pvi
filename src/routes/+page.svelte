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

<div class="grid h-screen place-items-center grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-0 md:gap-32">
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