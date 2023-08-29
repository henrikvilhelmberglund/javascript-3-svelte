<script>
	import { onMount } from "svelte";

	let amount = 0;
	let funds = 300;
	let currency = "SEK";
	let infoText = "";
	let loaded = false;

	onMount(() => {
		console.log("Booting up ATM...ATM is ready!");
		loaded = true;
		return () => {
			console.log("ATM shutting down…");
		};
	});

	$: {
		console.log(`Current amount: ${amount}`);
	}
  
	$: {
		console.log(`Chosen currency: ${currency}`);
	}

	$: updateCurrencyAndFunds(currency);

	function updateCurrencyAndFunds(dependency) {
		// ? avoids funds changing on initial load
		if (!loaded) return;
		amount = currency === "SEK" ? amount * 10 : amount / 10;
		funds = currency === "SEK" ? funds * 10 : funds / 10;
	}
</script>

<main class="mx-auto h-[700px] w-[500px] bg-green-500">
	<p>This is the ATM</p>
	<button on:click={() => (currency = "SEK")}>Currency: SEK</button>
	<button on:click={() => (currency = "Euro")}>Currency: Euro</button>
	<div class="flex justify-around pt-4">
		<button on:click={() => (amount = 0)}>Reset</button>
		<button on:click={() => (amount += 100)}> 100 </button>
		<button on:click={() => (amount += 500)}> 500 </button>
		<button on:click={() => (amount += 1000)}> 1000 </button>
	</div>
	<p class="relative left-0 top-12">
		Current funds: {funds}
		{currency}
	</p>
	<div class="m-4 flex h-32 items-center justify-center bg-white text-3xl font-semibold">
		<p>{amount}</p>
		<p class="pl-2">{currency}</p>
	</div>
	<button
		on:click={() => {
			if (amount === 0) {
				infoText = "Please select amount";
				return;
			}
			if (amount > funds) {
				infoText = `You can't withdraw more than ${funds} ${currency}`;
				return;
			}
			infoText = "Withdrawing money...";
			setTimeout(() => {
				infoText = `Successfully withdrew ${amount} ${currency}!`;
				funds -= amount;
				amount = 0;
			}, 2000);
		}}>
		Withdraw money
	</button>
	<button
		on:click={() => {
			if (amount === 0) {
				infoText = "Please select amount";
				return;
			}
			infoText = "Depositing money...";
			setTimeout(() => {
				infoText = `Successfully deposited ${amount} ${currency}!`;
				funds += amount;
				amount = 0;
			}, 2000);
		}}>
		Deposit money
	</button>
	{#if infoText}
		<p class="text-xl">{infoText}</p>
	{/if}
</main>

<style>
	button {
		@apply font-semibold border-1 hover-border-[#646cff] duration-250 rounded-md bg-white p-2 transition-colors;
	}
</style>
