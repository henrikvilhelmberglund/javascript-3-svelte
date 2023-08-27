<script>
	import Nav from "$lib/Nav.svelte";

	let routes = [
		{ link: "/02lektion2/album", display: "album" },
		{ link: "/02lektion2/todolist", display: "todolist" },
	];
</script>

<Nav {routes} level={2} />

<slot />

<style>
</style>
