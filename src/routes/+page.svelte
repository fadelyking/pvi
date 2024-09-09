<script>
	import "../app.css";
	import Country from "$lib/components/Country.svelte";
	import TotalClicks from "$lib/components/TotalClicks.svelte";
	import ProgressBar from "$lib/components/ProgressBar.svelte";

	// TODOS:
	// CHANGE THE INDEX OF THE CIRCLE DIVS SO THAT THEY DO NOT COVER ITEMS
</script>

<div class="h-full flex justify-center items-center">
	<div class=" flex gap-32 items-center justify-center">
		<div class="card">
			<Country countryName="Palestine">Palestine</Country>
		</div>

		<div class="flex flex-col items-center justify-center gap-5 mb-36">
			<TotalClicks />
			<ProgressBar />
		</div>
		<div class="card-2">
			<Country countryName="Israel">Israel</Country>
		</div>
	</div>
</div>

<div class="color"></div>
<div class="color-2"></div>
<div class="color-3"></div>
<div class="color-4"></div>

<style>
	.color {
		height: 50rem;
		width: 50rem;
		background-image: radial-gradient(closest-side, #14ac81, #003840);
		opacity: 50%;
		position: absolute;
		top: -37.5rem;
		left: 15%;
	}

	.color-2 {
		height: 43.75rem;
		width: 43.75rem;
		background-image: radial-gradient(closest-side, #14ac81, #003840);
		opacity: 50%;
		position: absolute;
		top: 0rem;
		left: -37.5rem;
		overflow: hidden;
	}

	.color-3 {
		height: 43.75rem;
		width: 43.75rem;
		background-image: radial-gradient(closest-side, white, #003840);
		opacity: 30%;
		position: absolute;
		top: -31.25rem;
		right: -25rem;
	}

	.color-4 {
		height: 43.75rem;
		width: 43.75rem;
		background-image: radial-gradient(closest-side, white, #003840);
		opacity: 20%;
		position: absolute;
		top: 12.5rem;
		right: -37.5rem;
	}
</style>
