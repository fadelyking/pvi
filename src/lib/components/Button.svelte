<script>
	// @ts-nocheck

	import { GradientButton } from "flowbite-svelte";

	export let color = "";

	// todos:
	// GLOW EFFECT ON BUTTONS
	// TRY TO REPLICATE FIGMA FILE BUTTON AS CLOSE AS POSSIBLE
</script>

<GradientButton on:click {color} class=" px-12 py-3 rounded-xl"
	>Click</GradientButton
>
