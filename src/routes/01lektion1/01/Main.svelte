<script>
	const favoriteBands = ["Unlucky Morpheus", "Powerwolf", "Hammerfall", "Galneryus", "Onmyouza"];
</script>

<main>
	<ul>
		{#each favoriteBands as favoriteBand}
			<li>{favoriteBand}</li>
		{/each}
	</ul>
</main>

<style>
	main {
		height: 200px;
		background-color: lightgreen;
	}

	li {
		list-style: number;
	}
</style>
