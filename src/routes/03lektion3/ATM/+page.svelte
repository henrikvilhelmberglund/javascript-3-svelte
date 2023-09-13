<script>
	import ATM from "./ATM.svelte";

	let showATM = true;
</script>

<div class="App container mx-auto my-0 text-center">
	<h1 class="text-6xl">ATM</h1>
	<button on:click={() => (showATM = !showATM)}>{showATM ? "Hide" : "Show"} ATM</button>
	{#if showATM}
		<ATM />
	{/if}
</div>

<style>
</style>
