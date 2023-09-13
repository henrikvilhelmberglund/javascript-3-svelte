<script>
	import Nav from "$lib/Nav.svelte";

	let routes = [{ link: "/03lektion3/ATM", display: "ATM" }];
</script>

<Nav {routes} level={2} />

<slot />

<style>
</style>
