<script lang="ts">
	import "../app.css";
	import ProgressBar from "$lib/components/ProgressBar.svelte";
	import type { PageData /*, FormData*/ } from "./$types";
	import Donate from "$lib/components/Donate.svelte";
	import Form from "$lib/components/Form.svelte";

	export let data: PageData;
	$: totalClicked = data.clicks.length;
</script>

<div class="grid grid-cols-1 justify-center place-items-center md:grid-cols-2">
	<div class="flex flex-col gap-3">
		<div class="flex flex-row gap-3">
			<Form countryISO="PS" clicks={data.palestine.length} />
			<Form countryISO="IL" clicks={data.israel.length} />
		</div>
		<p class=" font-black text-5xl px-3">
			{Intl.NumberFormat(undefined).format(totalClicked)} clicks
		</p>
		<ProgressBar
			progress={data.progress[0]?.progress !== null
				? Math.round(parseInt(data.progress[0].progress))
				: 50}
		/>
	</div>

	<Donate />
</div>
