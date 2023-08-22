<script>
	export let person = {};
	let showMore = false;
</script>

	<h3 class="inline">{person.firstName}</h3>
	{#if showMore}
		<h3 class="inline">{person.lastName}</h3>
		<span>({person.age})</span>
		<h4>
			hobby:
			{person.hobby}
		</h4>
	{/if}
	<button class="block" on:click={() => (showMore = !showMore)}>
		{showMore ? "Show less" : "Show more"}
	</button>

<style>
</style>
