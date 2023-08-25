<script>
	import Nav from "$lib/Nav.svelte";

	let routes = [{ link: "/02lektion2/album", display: "album" }];
</script>

<Nav {routes} level={2} />

<slot />

<style>
</style>
