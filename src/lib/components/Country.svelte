<script lang="ts">
    import Button from "./Button.svelte";
    import Clicks from "./Clicks.svelte";

    export let countryName: string = ""
    import { palestineClicks, israelClicks } from "$lib/stores/clicks";

    let israelValue: number
    let palestineValue: number

    function incrementIsrael() {
        console.log("this is running israel")
        israelClicks.update((n)=> n + 1)
        israelClicks.subscribe((value) => {
            israelValue = value
        })
    }
    function incrementPalestine(){
        console.log("this is running palestine")
        palestineClicks.update((n)=> n + 1)
        palestineClicks.subscribe((value) => {
            palestineValue = value
        })
    }


</script>

<div class="country">
    <div class=" text-white text-3xl">{countryName.toUpperCase()}</div>
    <img src='{countryName.toLowerCase()}.png' alt="Flag of the country">
    
    {#if countryName === "Israel"}
    <Button on:click={incrementIsrael}/>
    <Clicks clicks={israelValue}/>
    {:else}
    <Button on:click={incrementPalestine}/>
    <Clicks clicks={palestineValue}/>
    {/if}

</div>

<style>
    .country {
        border: 5px solid red;
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 20px;
        align-items: center;
    }
</style>