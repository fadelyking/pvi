<script>
	import "../app.css";
	import Country from "$lib/components/Country.svelte";
	import TotalClicks from "$lib/components/TotalClicks.svelte";
	import ProgressBar from "$lib/components/ProgressBar.svelte";
</script>

<div class="h-full flex justify-center items-center">
	<div class=" flex gap-32 items-center justify-center">
		<div class="card">
			<Country countryName="Palestine">Palestine</Country>
		</div>

		<div class="flex flex-col items-center justify-center gap-5">
			<TotalClicks />
			<ProgressBar />
		</div>
		<div class="card-2">
			<Country countryName="Israel">Israel</Country>
		</div>
	</div>
</div>
