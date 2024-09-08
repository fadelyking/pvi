<script>
	// @ts-nocheck

	import { GradientButton } from "flowbite-svelte";

	export let color = "";
</script>

<GradientButton on:click {color} class=" px-12 py-3 rounded-xl glow-effect"
	>Click</GradientButton
>
