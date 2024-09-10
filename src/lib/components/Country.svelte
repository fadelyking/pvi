<script lang="ts">
	import { clickStores } from "$lib/stores/clicks";
	let regionName = new Intl.DisplayNames(["en"], { type: "region" });
	export let clicks: number;
	export let countryISO: string;

	let countryClicks: any;
	$: countryClicks = clickStores[countryISO];
</script>

<div>
	<h3 class="text-white font-bold text-3xl">{regionName.of(countryISO)}</h3>
	<p class="text-center bg-black">
		{clicks} click{$countryClicks > 1 ? "s" : ""}
	</p>
</div>
