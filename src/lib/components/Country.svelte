<script>
    import Button from "./Button.svelte";
    import Clicks from "./Clicks.svelte";

    let countryName = ""
    $: country = countryName
</script>

<div class="card">
    <div class=" text-white text-3xl"><slot name="country">Country Name</slot></div>
    {country}
    <Button/>
    <Clicks/>
</div>