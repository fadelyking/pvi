<script>
	import { ISOToName } from "$lib/helpers/ISOToName";

	const donors = [
		{
			name: "Benjamin",
			value: 10000,
			country: "IL",
		},
		{
			name: "Furkan",
			value: 5000,
			country: "IL",
		},
		{
			name: "Fadhel",
			value: 10000,
			country: "PS",
		},
	];
</script>

<div class="bg-[#0e696a] rounded-lg p-6 w-[512px]">
	<h2 class="font-semibold">Leaderboards</h2>
	<ul>
		{#each donors as donor}
			<li>
				{donor.name} donated {donor.value.toLocaleString()} clicks for {ISOToName(
					donor.country,
				)}
			</li>
		{/each}
	</ul>
</div>
