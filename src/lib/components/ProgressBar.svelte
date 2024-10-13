<script lang="ts">
	// export let progress: number;
	export let q1 = "";
	export let q2 = "";

	export let q1Clicks = 0;
	export let q2Clicks = 0;
</script>

<div
	class="border border-white/20 p-6 rounded-xl flex justify-between items-center"
>
	<div class="p-1 px-1.5 rounded-full border border-white/40">
		<img
			class="select-none rounded-xl"
			id="flag"
			width={32}
			height={32}
			src="/flags/1x1/{q1.toLowerCase()}.svg"
			alt="Flag"
		/>
	</div>

	<!-- Progress bar -->
	<div class="bg-white/25 h-1 w-full xl:w-[15vw] relative">
		<div
			class={`bg-green-400 h-1`}
			style="width: {(q1Clicks / (q1Clicks + q2Clicks)) * 100}%"
		></div>
		<div
			class={`bg-blue-400 h-1 absolute`}
			style="left: {(q1Clicks / (q1Clicks + q2Clicks)) * 100}%; width: {(q2Clicks / (q1Clicks + q2Clicks)) * 100}%"
		></div>
		{#if q1Clicks > q2Clicks}
			<div class="shine absolute h-1" style="width: {(q1Clicks / (q1Clicks + q2Clicks)) * 100}%"></div>
		{:else if q2Clicks > q1Clicks}
			<div class="shine absolute h-1" style="left: {(q1Clicks / (q1Clicks + q2Clicks)) * 100}%; width: {(q2Clicks / (q1Clicks + q2Clicks)) * 100}%"></div>
		{/if}
	</div>


	<div class="p-1 px-1.5 rounded-full border border-white/40">
		<img
			class="select-none rounded-xl"
			id="flag"
			width={32}
			height={32}
			src="/flags/1x1/{q2.toLowerCase()}.svg"
			alt="Flag"
		/>
	</div>
</div>
<!-- 
<div class="hidden game-container drop-shadow-2xl border border-white/20">
	<div class="progress-bar bg-red-400">
		<div
			class="progress drop-shadow-2xl bg-blue-400"
			style="--progress-width: {progress}%"
		></div>
	</div>
</div> -->

<style>
	.shine {
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0.5) 0%,
			rgba(255, 255, 255, 0) 50%,
			rgba(255, 255, 255, 0.5) 100%
		);
		background-size: 200% 100%;
		animation: shine 1.5s infinite;
	}

	@keyframes shine {
		0% {
			background-position: 200% 0;
		}
		100% {
			background-position: -200% 0;
		}
	}

	.game-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
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
		position: relative;
		overflow: hidden;
		border-radius: 3em;
	}

	.progress {
		height: 100%;
		border-radius: 3em;
		width: var(--progress-width);
		transition: width 0.1s ease-in-out;
	}
</style>
