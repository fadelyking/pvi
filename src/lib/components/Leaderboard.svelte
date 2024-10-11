<script lang="ts">
	import { FormatTimeRelative } from "$lib/helpers/FormatTimeRelative";
	import { ISOToName } from "$lib/helpers/ISOToName";

	export let donors;
</script>

<div class="border border-white/20 rounded-lg p-4 h-full">
	<h2 class="font-semibold text-center text-xl mb-2">Leaderboards</h2>
	<ul class="text-sm">
		{#each donors as donor, i}
			<li class="odd:bg-black/15 p-1 rounded-md">
				{i + 1}. <strong>{donor.name}</strong> {donor.amount.toLocaleString()} {ISOToName(donor.country)}
			</li>
		{/each}
	</ul>
	<!-- <hr />
	<h2 class="font-semibold mt-2">Most Recent</h2>
	<ul>
		{#each donors as donor}
			<li>
				<strong>{donor.name}</strong> donated {donor.amount} clicks {FormatTimeRelative(
					new Date(donor.date)
				)}
			</li>
		{/each}
	</ul> -->
</div>
