<script>
	import Character from "./Character.svelte";
	import { result } from "./store";
</script>

{#if $result?.results}
	{#each $result.results as character, i}
		<Character {character} />
	{/each}
{/if}

<style>
</style>
