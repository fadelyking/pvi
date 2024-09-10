<script lang="ts">
	export let totalClicks: number;
</script>

<div class="clicks-num font-bold flex flex-col items-center justify-center">
	<span class="mb-10">JOIN THE MOVEMENT!</span>
	<span class="num px-3">{totalClicks}</span> clicks
</div>

<style>
	.clicks-num {
		color: white;
		font-size: 3.125rem;
	}

	.num {
		background-color: #0e696a;
		border-radius: 0.75rem;
	}
</style>
