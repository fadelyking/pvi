<script lang="ts">
	import { totalClicks } from "$lib/stores/clicks";
	let total: number;

	totalClicks.subscribe((value) => {
		total = value;
	});
</script>

<div class="clicks-num">{total} Clicked</div>

<style>
	.clicks-num {
		color: white;
		font-size: 60px;
	}
</style>
