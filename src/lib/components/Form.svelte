<script lang="ts">
    import { enhance } from "$app/forms";
    import { incrementByISO } from "$lib/stores/clicks";
    import Button from "$lib/components/Button.svelte";
    import Country from "$lib/components/Country.svelte";
    import { Ps } from "svelte-flag-icons";
    import { Il } from "svelte-flag-icons";

    export let countryISO: string;
    export let clicks: number;
</script>

<form method="POST" action="?/click" use:enhance>
    <div class="flex flex-col items-center">
        <input type="hidden" name="iso" value={countryISO} />
        {#if countryISO === "PS"}
            <Ps size={128} />
        {:else}
            <Il size={128} />
        {/if}
        <Country {countryISO} {clicks} />

        <Button
            classNames="bg-gradient-to-br from-green-400 px-12 my-4 hover:shadow-xl transition hover:saturate-150 active:scale-90"
            on:click={() => incrementByISO(countryISO)}
        />
    </div>
</form>
