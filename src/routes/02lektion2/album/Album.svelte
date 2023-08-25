<script>
	export let name;
	export let songs;

	let showAlbum = false;
</script>

<div class="p-4">
	<button on:click={() => (showAlbum = !showAlbum)}>
		{showAlbum ? "Hide album" : "Show album"}
	</button>
	{#if showAlbum}
		<h4 class="text-xl">{name}</h4>
		<ul>
			{#each Object.values(songs) as song}
				<li class="text-left">{song}</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
</style>
