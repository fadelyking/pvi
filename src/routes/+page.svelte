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
		height: 800px;
		width: 800px;
		background-image: radial-gradient(closest-side, #14ac81, #003840);
		opacity: 50%;
		position: absolute;
		top: -600px;
		left: 15%;
	}

	.color-2 {
		height: 700px;
		width: 700px;
		background-image: radial-gradient(closest-side, #14ac81, #003840);
		opacity: 50%;
		position: absolute;
		top: 0px;
		left: -600px;
		overflow: hidden;
	}

	.color-3 {
		height: 700px;
		width: 700px;
		background-image: radial-gradient(closest-side, white, #003840);
		opacity: 30%;
		position: absolute;
		top: -500px;
		right: -400px;
	}

	.color-4 {
		height: 700px;
		width: 700px;
		background-image: radial-gradient(closest-side, white, #003840);
		opacity: 20%;
		position: absolute;
		top: 200px;
		right: -600px;
	}
</style>
