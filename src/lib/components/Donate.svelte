<script lang="ts">
	import { enhance } from "$app/forms";
	import { PUBLIC_PAYPAL_KEY } from "$env/static/public";
	import { ISOToName } from "$lib/helpers/ISOToName";
	import { loadScript, type PayPalNamespace } from "@paypal/paypal-js";
	import { onMount } from "svelte";

	import { fade, slide } from "svelte/transition";

	export let q1: string = "";
	export let q2: string = "";

	const clientID = PUBLIC_PAYPAL_KEY;
	$: selectedPackage = -1;
	$: selectedPrice = 1;

	const packages = [
		{ amount: 1000, price: 1 },
		{ amount: 10000, price: 10 },
		{ amount: 50000, price: 50 },
		{ amount: 100000, price: 100 },
	];

	onMount(() => {
		loadScript({
			clientId: clientID,
			components: ["buttons", "marks", "messages"],
		}).then((paypal) => {
			if (
				paypal === undefined ||
				paypal === null ||
				paypal.Buttons === undefined ||
				paypal.Buttons === null
			) {
				return;
			}

			paypal
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
					onApprove: async (data, actions) => {
						console.log("APPROVED PAYMENT");
						if (!actions.order) {
							console.error("Order is undefined");
							return;
						}
						const details = await actions.order.capture();
						console.log("Payment approved:", details);
						const formElement = document.getElementById(
							"donate-form"
						) as HTMLFormElement | null;
						if (formElement) {
							formElement.submit();
						}
					},
					onError: function (err) {
						alert("something went wrong");
						console.log("Something went wrong", err);
					},
				})
				.render("#paypal");
		});
	});

	const formFieldTwo = [
		{
			label: "Display Name",
			name: "display-name",
			placeholder: "Display Name",
			type: "text",
			required: false,
		},
		{
			label: "Email",
			name: "email",
			placeholder: "Email",
			type: "text",
			required: true,
		},
		{
			label: "Mobile Phone",
			name: "mobile-phone",
			placeholder: "Mobile Phone",
			type: "text",
			required: false,
			optionalText:
				"By entering a phone number, you consent to receive text messages",
		},
		{
			label: "Message",
			name: "message",
			placeholder: "Message",
			type: "text",
			required: false,
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

<form
	id="donate-form"
	class="bg-[#0e696a] rounded-lg p-4 w-[400px] flex justify-center flex-col"
	method="POST"
	action="?/donate"
	use:enhance
>
	<h2 class="font-semibold text-xl">
		Boost your clicks with a donation below.
	</h2>
	<small> Select the amount of clicks you want. </small>
	<br />
	<br />
	<div class="flex flex-col gap-2 my-3">
		<select class="text-black rounded-md" bind:value={selectedPackage}>
			<option value={-1}>Select clicks</option>
			{#each packages as pkg}
				<option value={pkg.amount}
					>+{pkg.amount.toLocaleString()} clicks</option
				>
			{/each}
		</select>
	</div>
	<!-- TODO: Implement this -->
	<!-- <p class="text-center mb-3">or</p>
	<input
		class="col-span-2 rounded-md text-black"
		type="text"
		maxlength="6"
		name="other-amount"
		placeholder="Custom amount of clicks"
	/> -->

	{#if selectedPackage >= -1}
		<input type="hidden" name="amount" value={selectedPackage} />
		<div transition:slide={{}}>
			{#each formFieldTwo as field}
				<label class="mb-6">
					<div class="font-bold uppercase opacity-80 text-xs">
						{field.label}:<em class="text-red-600 font-black"
							>{field.required ? "*" : ""}</em
						>
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
						<div class="text-xs text-white">
							{field.optionalText}
						</div>
					{/if}
				</label>
			{/each}
			<div class="font-bold uppercase opacity-80 text-xs">
				Country<em class="text-red-600 font-black"></em>
			</div>
			<select class="w-full rounded-md text-black mt-1" name="country">
				<option value="">Choose a country</option>

				<option value={q1}>{ISOToName(q1)}</option>
				<option value={q2}>{ISOToName(q2)}</option>
			</select>
			<div>
				<div class="mt-8">
					<input
						type="checkbox"
						id="recentUpdates"
						class="mr-2"
						name="receive-update"
					/>
					<label for="recentUpdates" class="font-medium"
						>I want periodic updates on who is winning</label
					>
				</div>
				<div>
					<input
						type="checkbox"
						class="mr-2"
						id="anonymous"
						name="anonymous"
					/>
					<label for="anonymous" class="font-medium"
						>Keep my donation anonymous</label
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
	{/if}
	<div class={selectedPackage >= -1 ? "" : "hidden"}>
		<h2 class="font-semibold mb-4">Payment</h2>
		<div id="paypal"></div>
	</div>
</form>
