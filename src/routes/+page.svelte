<script lang="ts">
	import "../app.css";
	import ProgressBar from "$lib/components/ProgressBar.svelte";
	import type { PageData /*, FormData*/ } from "./$types";
	import Donate from "$lib/components/Donate.svelte";
	import Form from "$lib/components/Form.svelte";
	import Leaderboard from "$lib/components/Leaderboard.svelte";
	import { ISOToName } from "$lib/helpers/ISOToName";

	export let data: PageData;
	$: totalClicked = data.clicks.length;
</script>

<div class="flex flex-col md:flex-row justify-between">
	<div class="">
		<Leaderboard donors={data.donors} />
	</div>

	<div class="">
		<div class="grid grid-cols-1 gap-12 justify-center place-items-center">
			<h2 class="text-4xl font-black">
				{ISOToName(data.q1)} <em class="font-normal not-italic">vs.</em>
				{ISOToName(data.q2)}
			</h2>
			<div class="flex flex-col gap-3">
				<div class="flex flex-row justify-between gap-3">
					<Form
						countryISO={data.q1}
						clicks={data.firstCountry.length}
					/>
					<Form
						countryISO={data.q2}
						clicks={data.secondCountry.length}
					/>
				</div>
				<p class="font-black text-4xl">
					{Intl.NumberFormat(undefined).format(totalClicked)} clicks
				</p>
				<ProgressBar
					progress={data.firstCountry.length -
						data.secondCountry.length +
						50}
				/>
			</div>
		</div>
	</div>

	<div class="flex justify-center">
		<Donate q1={data.q1} q2={data.q2} />
	</div>
</div>
