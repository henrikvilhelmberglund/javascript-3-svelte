<script>
	export let streak;
</script>

<h2 class="text-3xl">{streak.activity}</h2>
<p>{streak.count}</p>
<button on:click={() => (streak.count += 1)}>+</button>
<button on:click={() => (streak.count -= 1)}>-</button>

<style>
</style>
