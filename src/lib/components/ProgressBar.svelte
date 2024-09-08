<script lang="ts">
	// TODO: Find a fair progress ratio and a good max progress number
	import { israelClicks, palestineClicks } from "$lib/stores/clicks";
	let progress = 50;
	const progressStep: number = 0.1;
	const maxProgress: number = 100;
	const minProgress: number = 0;

	function clickLeft() {
		if (progress > minProgress) {
			progress += progressStep;
		}
		checkWin();
	}

	function clickRight() {
		if (progress < maxProgress) {
			progress -= progressStep;
		}
		checkWin();
	}

	function checkWin() {
		if (progress <= minProgress) {
			alert("Right side wins!");
			resetGame();
		} else if (progress >= maxProgress) {
			alert("Left side wins!");
			resetGame();
		}
	}

	function resetGame() {
		progress = 50;
	}

	israelClicks.subscribe(() => {
		clickRight();
	});
	palestineClicks.subscribe(() => {
		clickLeft();
	});
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
		border-radius: 12px;
		padding: 25px;
		max-width: 90vw;
		margin: 0 auto;
	}

	.progress-bar {
		display: flex;
		width: 50vw;
		max-width: 600px;
		height: 15px;
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
