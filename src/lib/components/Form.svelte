<script lang="ts">
	import { enhance } from "$app/forms";
	import { incrementByISO } from "$lib/stores/clicks";
	import Button from "$lib/components/Button.svelte";
	import Country from "$lib/components/Country.svelte";

	import Particle from "$lib/components/Particle.svelte";

	import VanillaTilt from "vanilla-tilt";

	import { onMount } from "svelte";
	let flagElement: HTMLElement;

	$: dominantColor = "transparent";
	$: secondaryColor = "transparent";

	$: particleName = `flags/4x3/${countryISO.toLowerCase()}.svg`;

	let ready = false;

	onMount(() => {
		particleName = `flags/4x3/${countryISO.toLowerCase()}.svg`;

		//@ts-ignore
		VanillaTilt.init(document.querySelectorAll(".form"), {
			reverse: true,
			max: 15,
			speed: 100,
		});

		const flag = flagElement as HTMLImageElement;
		if (flag) {
			flag.crossOrigin = "Anonymous";
			flag.onload = () => {
				const canvas = document.createElement("canvas");
				const ctx = canvas.getContext("2d");
				if (ctx) {
					canvas.width = flag.width;
					canvas.height = flag.height;
					ctx.drawImage(flag, 0, 0);

					const imageData = ctx.getImageData(
						0,
						0,
						canvas.width,
						canvas.height,
					).data;

					let red = 0,
						green = 0,
						blue = 0,
						count = 0;

					for (let i = 0; i < imageData.length; i += 4) {
						red += imageData[i];
						green += imageData[i + 1];
						blue += imageData[i + 2];
						count++;
					}

					red = Math.floor(red / count);
					green = Math.floor(green / count);
					blue = Math.floor(blue / count);

					const hexColor = `#${red.toString(16).padStart(2, "0").toUpperCase()}${green.toString(16).padStart(2, "0").toUpperCase()}${blue.toString(16).padStart(2, "0").toUpperCase()}`;
					dominantColor = `${hexColor}`;
					// TODO: Secondary color
				}
			};
		}
	});

	export let countryISO: string;
	export let clicks: number;

	import { Confetti } from "svelte-confetti";

	let confetti = false;
	function click() {
		incrementByISO(countryISO);

		confetti = true;

		setTimeout(() => {
			confetti = false;
		}, 1000);
	}

	import { winningCountry } from "$lib/stores/winning";
	console.log($winningCountry.clicks);
</script>

<!-- 
{#if confetti}
	<div class="absolute inset-0 pointer-events-none z-50">
		<Confetti
			colorArray={[
				"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjs5EpWI0Ifpgl3ZzZfq_G_I8YTuz9_pfiPw&s)",
			]}
			amount={50}
			duration={5000}
			fallDistance="100vh"
		/>
	</div>
{/if} -->

<Particle
	options={{
		particle: particleName,
		speedHorz: 5,
		speedUp: 0.5,
	}}
>
	<form method="POST" action="?/click" use:enhance class="form relative">
		<div
			class="absolute w-full h-full -z-10 blur-xl"
			style="background: {dominantColor};opacity: 0.8"
		/>
		<button
			on:click={click}
			class="border border-white/10 bg-black/50 active:scale-90 transition hover:scale-105 p-6 rounded-xl"
			style=""
		>
			<div class="flex flex-col items-center" style="">
				<input type="hidden" name="iso" value={countryISO} />
				{#if countryISO}
					<img
						bind:this={flagElement}
						class="select-none rounded-xl"
						style="
								border:4px solid hotpink;25px:80px;  -webkit-mask:
								conic-gradient(at 25px 25px,#0000 75%,#000 0)
								0 0/calc(100% - 25px) calc(100% - 25px),
								linear-gradient(#000 0 0) content-box;
								border: 4px solid transparent;
								border-top-color: red;
								border-right-color: green;
								border-bottom-color: blue;
								border-left-color: yellow;
								box-sizing: border-box;
						"
						id="flag"
						width={128}
						height={128}
						src="/flags/1x1/{countryISO.toLowerCase()}.svg"
						alt="Flag"
					/>
					<!-- <span
					id="flag"
					bind:this={flagElement}
					class="fi mb-2 fi-{countryISO.toLowerCase()}"
					style="font-size: 5em"
				/> -->
					<!-- TODO: Based on flag, get dominant color -->
				{/if}

				<Country {countryISO} {clicks} />

				<!-- <Button
                    classNames="bg-gradient-to-br {countryISO === 'PS'
                        ? 'from-green-400'
                        : 'from-blue-600'}  px-12 my-4 hover:shadow-xl transition hover:saturate-150 active:scale-90"
                    on:click={() => incrementByISO(countryISO)}
                /> -->
			</div>
		</button>
	</form>
</Particle>
