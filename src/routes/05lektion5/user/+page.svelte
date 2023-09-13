<script>
	import { getContext } from "svelte";
	import Parent from "../Parent.svelte";
	const streaks = getContext("streaks");

	let activity = "";
	let count = 0;
</script>

<a class="flex flex-col items-center" href="/05lektion5">Go back to list</a>
<div class="flex flex-col items-center">
	<input type="text" bind:value={activity} />
	<input type="number" bind:value={count} />
	<button on:click={() => ($streaks = [...$streaks, { activity, count }])}>Add activity</button>
</div>
<Parent />

<style>
</style>
