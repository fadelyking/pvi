<script lang="ts">
	import "../app.css";
	import ProgressBar from "$lib/components/ProgressBar.svelte";
	import type { PageData /*, FormData*/ } from "./$types";
	import Donate from "$lib/components/Donate.svelte";
	import Form from "$lib/components/Form.svelte";

	export let data: PageData;
	$: totalClicked = data.clicks.length;
</script>

<div class="flex flex-col justify-center items-center">
	<div
		class="grid h-screen place-items-center grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-0 md:gap-32 max-w-screen-xl w-full"
	>
		<Form countryISO="PS" clicks={data.palestine.length} />

		<div class="flex flex-col items-center gap-3">
			<span class="text-center font-black text-5xl px-3"
				>{Intl.NumberFormat(undefined).format(totalClicked)} clicks</span
			>
			<br />
			<ProgressBar
				progress={data.progress[0]?.progress !== null
					? Math.round(parseInt(data.progress[0].progress))
					: 50}
			/>
		</div>

		<Form countryISO="IL" clicks={data.israel.length} />
	</div>
	<Donate />
</div>
