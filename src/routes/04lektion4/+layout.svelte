<script>
	import Nav from "$lib/Nav.svelte";

	let routes = [
		{ link: "/04lektion4/blog", display: "blog" },
		{ link: "/04lektion4/rick-morty", display: "rick-morty" },
	];
</script>

<Nav {routes} level={2} />

<slot />

<style>
</style>
