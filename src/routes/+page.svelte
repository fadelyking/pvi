<script lang="ts">
	import "../app.css";
	import ProgressBar from "$lib/components/ProgressBar.svelte";
	import type { PageData /*, FormData*/ } from "./$types";
	import Donate from "$lib/components/Donate.svelte";
	import Form from "$lib/components/Form.svelte";
	import Leaderboard from "$lib/components/Leaderboard.svelte";

	export let data: PageData;
	$: totalClicked = data.clicks.length;
</script>

<div class="mx-auto container">
	<div class="flex justify-center my-12">
		<Leaderboard />
	</div>

	<div class="grid grid-cols-1 justify-center place-items-center">
		<div class="flex flex-col gap-3">
			<div class="flex flex-row justify-between gap-3">
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
		<div class="my-12">
			<Donate />
		</div>
	</div>
</div>
