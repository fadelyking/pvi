<script lang="ts">
	import { ISOToName } from "$lib/helpers/ISOToName";
	import { clickStores } from "$lib/stores/clicks";
	export let clicks: number;
	export let countryISO: string;

	let countryClicks: any;
	$: countryClicks = clickStores[countryISO];
</script>

<div>
	<br/>

	<h3 class="text-white font-bold text-3xl">{ISOToName(countryISO)}</h3>
	<p class="text-center italic font-light text-xl">
		{clicks} clicks
	</p>
</div>
