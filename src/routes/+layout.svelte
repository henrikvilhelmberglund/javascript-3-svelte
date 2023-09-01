<script>
	import Nav from "$lib/Nav.svelte";
	import "@unocss/reset/tailwind.css";

	let routes = [
		{ link: "/01lektion1", display: "Lektion 1" },
		{ link: "/02lektion2", display: "Lektion 2" },
		{ link: "/03lektion3", display: "Lektion 3" },
		{ link: "/04lektion4", display: "Lektion 4" },
	];
</script>

<Nav {routes} level={1} />

<slot />

<style></style>
