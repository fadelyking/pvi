<script>
	const donors = [
		{
			name: "Benjamin",
			value: 10000,
			country: "IL",
		},
		{
			name: "Furkan",
			value: 5000,
			country: "IL",
		},
		{
			name: "Fadhel",
			value: 10000,
			country: "PS",
		},
	];
</script>

<div>
	<ul>

	{#each donors as donor}
		<li>{donor.name} donated {donor.value} for {donor.country}</li>
	{/each}
</ul>

</div>
