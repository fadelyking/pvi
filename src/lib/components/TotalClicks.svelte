<script lang="ts">
	import { totalClicks } from "$lib/stores/clicks";
	let total: number;

	totalClicks.subscribe((value) => {
		total = value;
	});
</script>

<div class="clicks-num font-bold flex flex-col items-center justify-center">
	<span class="mb-10">JOIN THE MOVEMENT!</span>
	<span class="num px-3">{total}</span> Clicks
</div>

<style>
	.clicks-num {
		color: white;
		font-size: 50px;
	}

	.num {
		background-color: #0e696a;
		border-radius: 12px;
	}
</style>
