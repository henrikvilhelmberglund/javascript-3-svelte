<script>
	import Album from "./Album.svelte";

	export let albums;
</script>

<div>
	<h3 class="text-3xl">Album List</h3>
	{#each albums as album}
		<Album {...album} />
	{/each}
</div>

<style>
</style>
