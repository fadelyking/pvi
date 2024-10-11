<script lang="ts">
	import { FormatTimeRelative } from "$lib/helpers/FormatTimeRelative";
	import { ISOToName } from "$lib/helpers/ISOToName";
	let flagElement: HTMLElement;
	export let donors;
</script>

<div class="rounded-lg p-4 h-full">
	<h2 class="font-semibold text-center text-xl mb-2">Leaderboards</h2>
	<ul class="text-sm">
		{#each donors as donor}
			<li class="odd:bg-black/15 p-1 rounded-md flex items-center gap-2">
				<img
					bind:this={flagElement}
					class="select-none"
					id="flag"
					width={30}
					height={30}
					src="/flags/1x1/{donor.country.toLowerCase()}.svg"
					alt="Flag"
				/>
				<strong>{donor.name}</strong>
				{donor.amount.toLocaleString()}
				{ISOToName(donor.country)}
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
