<script>
	import Nav from "$lib/Nav.svelte";

	let routes = [
    { link: "/01lektion1/01", display: "01" },
    { link: "/01lektion1/02", display: "02" },
  
  
  ];
</script>

<Nav {routes} level={2} />

<slot />

<style>
</style>
