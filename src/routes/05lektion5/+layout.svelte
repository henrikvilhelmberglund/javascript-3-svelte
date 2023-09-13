<script>
	import { writable } from "svelte/store";
	import { setContext } from "svelte";

	setContext(
		"streaks",
		writable([
			{ activity: "eating", count: 3 },
			{ activity: "programming", count: 4 },
			{ activity: "meditating", count: 2 },
		])
	);
</script>

<slot />

<style>
</style>
