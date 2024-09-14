<script lang="ts">
	$: selectedPackage = -1;

	const packages = [
		{
			amount: 1000,
			price: 1,
		},
		{
			amount: 10000,
			price: 10,
		},
		{
			amount: 50000,
			price: 50,
		},
		{
			amount: 100000,
			price: 100,
		},
	];
</script>

<div class="bg-[#0e696a] rounded-lg p-6 flex justify-center flex-col">
	<h2 class="font-semibold">Boost your clicks with a donation below.</h2>
	<small> Select the amount of clicks you want. </small>
	<br />
	<br />
	<div class="flex flex-col gap-2 my-3">
		{#each packages as pkg}
			<button
				class="transition border {selectedPackage === pkg.amount
					? 'bg-[#02a676] border-white'
					: 'bg-[#02a676]/50 border-transparent'} p-2 px-4 rounded-md"
				on:click={() => (selectedPackage = pkg.amount)}
			>
				{pkg.amount.toLocaleString()} Clicks
			</button>
		{/each}
	</div>
	<p class="text-center mb-3">or</p>
	<input
		class="col-span-2 rounded-md text-black"
		type="text"
		maxlength="6"
		name="other-amount"
		placeholder="Custom amount of Clicks"
	/>

	<button
		disabled={selectedPackage === -1}
		class="bg-[#02a676] mt-3 hover:saturate-150 transition p-2 px-4 rounded-md {selectedPackage ===
		-1
			? 'pointer-events-none opacity-50'
			: ''}"
		type="submit">Next</button
	>
</div>

<style>
	.form-button {
		background-color: #02a676;
		border-width: 1px;
		border-color: #007369;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 0.375rem;
		height: 3rem;
	}
</style>
