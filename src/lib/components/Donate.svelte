<script lang="ts">
	import { PUBLIC_PAYPAL_KEY } from "$env/static/public";
	import { loadScript, type PayPalNamespace } from "@paypal/paypal-js";

	const clientID = PUBLIC_PAYPAL_KEY;
	let paypal: PayPalNamespace | null;

	$: selectedPackage = -1;
	$: selectedPrice = 1;

	const packages = [
		{ amount: 1000, price: 1 },
		{ amount: 10000, price: 10 },
		{ amount: 50000, price: 50 },
		{ amount: 100000, price: 100 },
	];

	async function runPaypal() {
		try {
			paypal = await loadScript({ clientId: clientID });
		} catch (error) {
			console.error("failed to load the PayPal JS SDK script", error);
		}
		if (paypal && typeof paypal.Buttons === "function") {
			try {
				await paypal
					.Buttons({
						createOrder: (data, actions) => {
							return actions.order.create({
								intent: "CAPTURE",
								purchase_units: [
									{
										amount: {
											currency_code: "USD",
											value: `${selectedPrice}`,
										},
									},
								],
							});
						},
					})
					.render("#paypal");
			} catch (error) {
				console.error("failed to render the PayPal Buttons", error);
			}
		}
	}

	runPaypal();

	const formFieldTwo = [
		{
			label: "Display Name",
			name: "display-name",
			placeholder: "Display Name",
			type: "text",
		},
		{
			label: "Email",
			name: "email",
			placeholder: "Email",
			type: "text",
		},
		{
			label: "Mobile Phone",
			name: "mobile-phone",
			placeholder: "Mobile Phone",
			type: "text",
			optionalText:
				"optional; by entering a phone number, you consent to receive text messages",
		},

		{
			label: "Message",
			name: "message",
			placeholder: "Message",
			type: "text",
			isTextarea: true,
		},
	];

	function handlePackageSelect() {
		const selectedPkg = packages.find(
			(pkg) => pkg.amount === selectedPackage
		);
		selectedPrice = selectedPkg ? selectedPkg.price : packages[3].price;
	}
	handlePackageSelect();
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
				on:click={() => {
					selectedPackage = pkg.amount;
					handlePackageSelect();
				}}
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

<div class="bg-[#0e696a] rounded-lg p-6 flex flex-col justify-center">
	<h2 class="font-semibold mb-4">Details</h2>

	{#each formFieldTwo as field}
		<label class="mb-4">
			<div class="font-bold uppercase opacity-80 text-xs">
				{field.label}:
			</div>

			{#if field.isTextarea}
				<textarea
					class="w-full rounded-md text-black mt-1 h-24"
					name={field.name}
					placeholder={field.placeholder}
				></textarea>
			{:else}
				<input
					class="w-full rounded-md text-black mt-1"
					type={field.type}
					name={field.name}
					placeholder={field.placeholder}
				/>
			{/if}

			{#if field.optionalText}
				<div class="text-sm text-white">{field.optionalText}</div>
			{/if}
		</label>
	{/each}
	<div>
		<div class="mt-8">
			<input
				type="checkbox"
				id="recentUpdates"
				class="mr-2"
				name="receive-update"
			/>
			<label for="recentUpdates" class="font-medium text-lg"
				>YES! I want periodic updates on who is winning</label
			>
		</div>
		<div>
			<input type="checkbox" class="mr-2" id="anonymous" />
			<label for="anonymous" class="font-medium text-lg"
				>Please keep my donation anonymous!</label
			>
		</div>
	</div>
	<button
		class="bg-[#02a676] mt-6 hover:saturate-150 transition p-2 px-4 rounded-md"
		type="submit">Next</button
	>
	<button
		class="text-white mt-2 font-semibold transition p-2 px-4 rounded-md"
		type="submit">Previous</button
	>
</div>

<div class="bg-[#0e696a] rounded-lg p-6 flex flex-col justify-center">
	<h2 class="font-semibold mb-4">Payment</h2>
	<div id="paypal"></div>
	<button
		class="text-white mt-2 font-semibold transition p-2 px-4 rounded-md"
		type="submit">Previous</button
	>
</div>
