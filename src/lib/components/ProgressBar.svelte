<script lang="ts">
	export let progress: number;
</script>

<div class="game-container drop-shadow-2xl">
	<div class="progress-bar">
		<div
			class="progress drop-shadow-2xl"
			style="--progress-width: {progress}%"
		></div>
	</div>
</div>

<style>
	.game-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #0e696a;
		border-radius: 0.75rem;
		padding: 1.5625rem;
		max-width: 90vw;
		margin: 0 auto;
	}

	.progress-bar {
		display: flex;
		width: 50vw;
		max-width: 37.5rem;
		height: 0.9375rem;
		background-color: #004699;
		position: relative;
		overflow: hidden;
		border-radius: 3em;
	}

	.progress {
		background-color: #02a676;
		height: 100%;
		border-radius: 3em;
		width: var(--progress-width);
		transition: width 0.1s ease-in-out;
	}
</style>
