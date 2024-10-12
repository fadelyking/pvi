<script lang="ts">
	import { FormatTimeRelative } from "$lib/helpers/FormatTimeRelative";
	import { ISOToName } from "$lib/helpers/ISOToName";
	let flagElement: HTMLElement;
	export let donors;
</script>

<div class="rounded-lg p-4 h-1/2">
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
</div>
<div class="rounded-lg h-full">
	<h2 class="font-semibold text-center text-xl mb-2">Messages</h2>
	<div class="border border-white/20 rounded-lg p-2 h-1/2 overflow-auto">
		<ul class="text-sm">
			{#each donors as donor}
				<li
					class="odd:bg-black/15 p-1 rounded-md flex flex-col gap-1 items-start"
				>
					<div class="flex gap-1 items-center">
						<img
							bind:this={flagElement}
							class="select-none"
							id="flag"
							width={16}
							height={16}
							src="/flags/1x1/{donor.country.toLowerCase()}.svg"
							alt="Flag"
						/>
						<strong>{donor.name}:</strong>
					</div>
					<span class="max-w-64">{donor.message}</span>
				</li>
			{/each}
		</ul>
	</div>
</div>
