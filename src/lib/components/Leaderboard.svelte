<script>
    import { FormatTimeRelative } from "$lib/helpers/FormatTimeRelative";
	import { ISOToName } from "$lib/helpers/ISOToName";

	const leaderboard = [
		{
			name: "Benjamin",
			amount: 10000,
			country: "IL",
		},
		{
			name: "Furkan",
			amount: 5000,
			country: "IL",
		},
		{
			name: "Fadhel",
			amount: 10000,
			country: "PS",
		},
	];

	const recent = [
		{
			name: "Person",
			amount: 500,
			country: "IL",
			date: Date.now()
		},
		{
			name: "Person 2",
			amount: 5000,
			country: "IL",
			date: Date.now() - 150000,
		},
		{
			name: "Person 3",
			amount: 10000,
			country: "PS",
			date: Date.now() - 550000,
		},
	];
</script>

<div class="bg-[#0e696a] rounded-lg p-6 w-[512px]">
	<h2 class="font-semibold">Leaderboards</h2>
	<ul>
		{#each leaderboard as donor}
			<li>
				<strong>{donor.name}</strong> donated {donor.amount.toLocaleString()} clicks for {ISOToName(
					donor.country,
				)}
			</li>
		{/each}
	</ul>
	<hr/>
	<h2 class="font-semibold mt-2">Most Recent</h2>
	<ul>
		{#each recent as donor}
		<li><strong>{donor.name}</strong> donated {donor.amount} clicks {FormatTimeRelative(new Date(donor.date))}</li>
		{/each}
	</ul>
</div>
