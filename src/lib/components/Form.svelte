<script lang="ts">
    import { enhance } from "$app/forms";
    import { incrementByISO } from "$lib/stores/clicks";
    import Button from "$lib/components/Button.svelte";
    import Country from "$lib/components/Country.svelte";
    import { Ps } from "svelte-flag-icons";
    import { Il } from "svelte-flag-icons";

    import VanillaTilt from "vanilla-tilt";

    import { onMount } from "svelte";
    onMount(() => {
        //@ts-ignore
        VanillaTilt.init(document.querySelectorAll(".form"), { reverse: true, max: 15, speed: 100 });
    });

    export let countryISO: string;
    export let clicks: number;

    const MAP = ["from-green-400 via-green-400/25", "from-blue-600 via-blue-600/25"];
</script>

<form method="POST" action="?/click" use:enhance class="form">
    <button on:click={() => incrementByISO(countryISO)} class="border border-black/75 active:scale-90 transition hover:scale-105 p-6 rounded-xl bg-gradient-to-br {MAP[countryISO === "PS" ? 0 : 1]}">
        <div class="flex flex-col items-center">
            <input type="hidden" name="iso" value={countryISO} />
            {#if countryISO === "PS"}
                <Ps size={128} />
            {:else}
                <Il size={128} />
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
