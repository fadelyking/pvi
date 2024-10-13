<script lang="ts">
	import "../app.css";
	import ProgressBar from "$lib/components/ProgressBar.svelte";
	import type { PageData /*, FormData*/ } from "./$types";
	import Donate from "$lib/components/Donate.svelte";
	import Form from "$lib/components/Form.svelte";
	import Leaderboard from "$lib/components/Leaderboard.svelte";
	import { ISOToName } from "$lib/helpers/ISOToName";
	import { optimistikit } from "optimistikit";
	export let data: PageData;
	const { enhance, optimistic } = optimistikit<typeof data>();
	$: optimistic_data = optimistic(data);
	$: totalClicked = data.clicks.length;

	const AmountFirstCountry = data.donorsFirstCountry
		.map((donor: object) => parseInt(donor.amount))
		.reduce((acc: number, amount: number) => acc + amount, 0);

	const AmountSecondCountry = data.donorsSecondCountry
		.map((donor: object) => parseInt(donor.amount))
		.reduce((acc: number, amount: number) => acc + amount, 0);

	$: totalFirstCountry = AmountFirstCountry + data.firstCountry.length;
	$: totalSecondCountry = AmountSecondCountry + data.secondCountry.length;
	$: generalTotal = totalFirstCountry + totalSecondCountry;
</script>

<span
	class="pointer-events-none xl:text-left z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent"
>
	Countries at War
</span>

<div class="flex flex-col xl:flex-row justify-between">
	<div class="xl:block hidden">
		<Leaderboard donors={data.donors} />
	</div>

	<div
		class="grid grid-cols-1 gap-3 xl:gap-12 justify-center place-items-center"
	>
		<h2 class="text-4xl font-black">
			{ISOToName($optimistic_data.q1)}
			<em class="font-normal not-italic">vs.</em>
			{ISOToName($optimistic_data.q2)}
		</h2>
		<div class="flex flex-col gap-3">
			<div class="flex flex-row justify-between gap-3">
				<Form
					countryISO={$optimistic_data.q1}
					clicks={$optimistic_data.firstCountry.length}
				/>
				<Form
					countryISO={$optimistic_data.q2}
					clicks={$optimistic_data.secondCountry.length}
				/>
			</div>

			<span class="my-12"></span>

			<p class="font-black text-4xl">
				{Intl.NumberFormat(undefined).format(generalTotal)} clicks
			</p>
			<ProgressBar
				q1={data.q1}
				q2={data.q2}
				q1Clicks={totalFirstCountry}
				q2Clicks={totalSecondCountry}
				progress={totalFirstCountry - totalSecondCountry + 50}
			/>
		</div>
	</div>

	<div class="flex justify-center xl:mt-0 mt-12">
		<Donate q1={data.q1} q2={data.q2} />
	</div>
</div>
