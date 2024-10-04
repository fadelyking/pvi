<script lang="ts">
	import { FormatTimeRelative } from "$lib/helpers/FormatTimeRelative";
	import { ISOToName } from "$lib/helpers/ISOToName";

	export let donors;
</script>

<div class="bg-[#0e696a] rounded-lg p-6 w-[512px]">
	<h2 class="font-semibold">Leaderboards</h2>
	<ul>
		{#each donors as donor}
			<li>
				<strong>{donor.name}</strong> donated {donor.amount.toLocaleString()}
				clicks for {ISOToName(donor.country)}
			</li>
		{/each}
	</ul>
	<hr />
	<h2 class="font-semibold mt-2">Most Recent</h2>
	<ul>
		{#each donors as donor}
			<li>
				<strong>{donor.name}</strong> donated {donor.amount} clicks {FormatTimeRelative(
					new Date(donor.date)
				)}
			</li>
		{/each}
	</ul>
</div>
