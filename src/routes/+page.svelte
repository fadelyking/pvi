<script>
    import "../app.css";
    import Country from "$lib/components/Country.svelte";
    import TotalClicks from "$lib/components/TotalClicks.svelte";
</script>

<div class="card">


<Country countryName="Palestine">Palestine</Country>
<Country countryName="Israel">Israel</Country>
<TotalClicks/>
</div>




<style>
.card {
    display: flex;
}
</style>