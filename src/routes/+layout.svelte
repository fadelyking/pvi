<script lang="ts">
	import Marquee from "$lib/components/Marquee.svelte";
	import "../app.css";
	// TODO: Make background change dynamically based on winning country dominant colors from flag
	// TODO: URL query param slugs for countries, e.g. ?1=PS&2=iL, interchangeable
	// TODO: Screen size queries
	import ReviewCard from "$lib/components/ReviewCard.svelte";
	import { ISOToName } from "$lib/helpers/ISOToName";
	import Border from "$lib/components/Border.svelte";
	import type { PageData } from "./$types";
	// TODO: Donor stuff?
	const reviews = [
		{
			name: "Avi",
			username: "@Avi",
			body: "Go Israel! Proud of our achievements.",
			img: "https://avatar.vercel.sh/avi",
		},
		{
			name: "Fatima",
			username: "@Fatima",
			body: "Palestine deserves recognition and peace.",
			img: "https://avatar.vercel.sh/fatima",
		},
		{
			name: "David",
			username: "@David",
			body: "Israel is a beacon of innovation and culture.",
			img: "https://avatar.vercel.sh/david",
		},
		{
			name: "Layla",
			username: "@Layla",
			body: "We need to focus on unity and understanding.",
			img: "https://avatar.vercel.sh/layla",
		},
		{
			name: "Noah",
			username: "@Noah",
			body: "Israel's resilience is inspiring.",
			img: "https://avatar.vercel.sh/noah",
		},
		{
			name: "Omar",
			username: "@Omar",
			body: "Palestine's history and culture are rich and vibrant.",
			img: "https://avatar.vercel.sh/omar",
		},
	];
	let firstRow = reviews.slice(0, reviews.length / 2);
	let secondRow = reviews.slice(reviews.length / 2);
	export let data: PageData;
	// TODO: Currently does not say versus who
</script>

<nav
	class="border border-b-white/10 border-transparent p-1 animate-marquee text-center text-sm"
>
	<ol class="flex flex-row justify-between animate-marquee">
		<Marquee class="[--duration:45s]" pauseOnHover>
			{#each data.donors as donor}
				<li class="mx-12">
					<strong>{donor.name}</strong> donated +<strong
						class="text-green-400 saturate-50"
						>{donor.amount.toLocaleString()}</strong
					>
					clicks for
					<img
						src="/flags/1x1/{donor.country.toLowerCase()}.svg"
						width={16}
						height={16}
						class="inline rounded-full mr-1"
						alt="Flag of {ISOToName(donor.country)}"
					/>{ISOToName(donor.country)}!
				</li>
			{/each}
		</Marquee>
	</ol>
</nav>

<div
	class="mx-auto relative container my-12 bg-black p-12 rounded-xl box shadow-[0px_0px_50px_50px_#030303]"
>
	<!-- <Border borderWidth={1} size={800} anchor={90} /> -->
	<!-- <div class="bg-gradient-to-br from-[#ffa6c8] via-[#e5a4ff] blur-md to-[#9fe5da] w-full h-full absolute -z-10 left-0 top-0 animate-border-beam" /> -->
	<main class="p-3 mx-auto container">
		<slot />
	</main>

	<footer class="hidden mx-auto container">
		<div
			class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-20 md:shadow-xl"
		>
			<Marquee pauseOnHover class="[--duration:20s]">
				{#each firstRow as item}
					<ReviewCard {...item} />
				{/each}
			</Marquee>
			<Marquee reverse pauseOnHover class="[--duration:20s]">
				{#each secondRow as item}
					<ReviewCard {...item} />
				{/each}
			</Marquee>
			<div
				class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#030303] dark:from-background"
			></div>
			<div
				class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#030303] dark:from-background"
			></div>
		</div>
	</footer>
</div>
<div class="cont">
	<div class="griddy grid-flip"></div>
</div>

<style>
	.box,
	.box-glow {
		position: absolute;
		overflow: hidden;
		z-index: 0;
		border-radius: 10px;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.box-glow {
		overflow: hidden;
		/* Glow Blur */
		filter: blur(20px);
	}

	.box:before,
	.box-glow:before {
		content: "";
		z-index: -2;
		text-align: center;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(0deg);
		position: absolute;
		width: 99999px;
		height: 99999px;
		background-repeat: no-repeat;
		background-position: 0 0;
		/*border color, change middle color*/
		background-image: conic-gradient(
			rgba(0, 0, 0, 0),
			#ff69b4,
			#ffd700,
			#00ff00,
			#00ffff,
			#ff00ff,
			rgba(0, 0, 0, 0) 25%
		);
		/* change speed here */
		animation: rotate 4s linear infinite;
	}

	.box:after {
		content: "";
		position: absolute;
		z-index: -1;
		/* border width */
		left: 5px;
		top: 5px;
		/* double the px from the border width left */
		width: calc(100% - 10px);
		height: calc(100% - 10px);
		/*bg color*/
		background: black;
		/*box border radius*/
		border-radius: 7px;
	}

	@keyframes rotate {
		100% {
			transform: translate(-50%, -50%) rotate(1turn);
		}
	}

	.cont {
		z-index: -1;
		border-radius: 1rem;
		margin: 0 auto;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-color: #030303;
		perspective: 7vw;
		position: fixed; /* Change to fixed */
		bottom: 0; /* Ensure it stays at the bottom */
		/* affects horizon */
	}
	.griddy {
		position: absolute;
		top: 0;
		left: 50%;
		overflow: hidden;
		width: 350%;
		height: 200%;
		transform: translate(-50%, -50%) rotateX(-60deg);
		background-image: linear-gradient(
				to right,
				rgba(255, 0, 255, 0.5) 1px,
				transparent 3em
			),
			linear-gradient(
				to bottom,
				rgba(0, 255, 255, 0.5) 1px,
				transparent 3em
			);
		background-size: 10% 10%;
		animation: gridAnimation 24s linear infinite;
	}

	.grid-flip {
		top: 100%;
		transform: translate(-50%, -50%) rotateX(60deg);
		animation-direction: reverse;
	}

	@keyframes gridAnimation {
		0% {
			background-position: 0 0;
		}

		100% {
			background-position: 0% 100%;
		}
	}
</style>
