<script lang="ts">
	import { israelClicks, palestineClicks } from "$lib/stores/clicks";
	let progress = 50;
	const progressStep: number = 1;
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

<div class="game-container">
	<div class="progress-bar">
		<div class="progress" style="--progress-width: {progress}%"></div>
	</div>
</div>

<style>
	.game-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.progress-bar {
		width: 300px;
		height: 30px;
		background-color: blue;
		position: relative;
		border-radius: 3em;
	}

	.progress {
		background-color: green;
		height: 100%;
		border-radius: 3em;
		width: var(--progress-width);
		transition: width 0.3s ease-in-out;
	}
</style>
