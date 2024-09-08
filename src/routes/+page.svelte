<script>
	import "../app.css";
	import Country from "$lib/components/Country.svelte";
	import TotalClicks from "$lib/components/TotalClicks.svelte";
	import ProgressBar from "$lib/components/ProgressBar.svelte";
</script>

<div class="layout">
	<div class="card">
		<Country countryName="Palestine">Palestine</Country>
	</div>
	<div class="card-2">
		<Country countryName="Israel">Israel</Country>
	</div>
	<div class="total-clicks">
		<Country countryName="Palestine">Palestine</Country>
	</div>
</div>

<TotalClicks />
<ProgressBar />

<style>
	.layout {
		display: grid;
		grid-template-columns: 12, minmax(12, 1fr);
	}

	.card {
		display: flex;
		grid-column: 3;
	}
</style>
