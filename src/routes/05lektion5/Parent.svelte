<script>
	import { getContext } from "svelte";
	import Child from "./Child.svelte";
	const streaks = getContext("streaks");
</script>

<div class="mx-0 flex flex-col items-center">
	{#each $streaks as streak}
		<Child {streak} />
	{/each}
</div>

<style>
</style>
