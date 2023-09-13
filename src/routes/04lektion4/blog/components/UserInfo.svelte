<script>
	import { onMount } from "svelte";

	export let userId;

	let user = false;
	onMount(() => {
		async function fetchUser() {
			const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
			const data = await response.json();
			user = data;
		}
		fetchUser();
	});
</script>

{#if user}
	<h3>{user?.username}</h3>
	<p>{user?.email}</p>
	<p>{user?.address?.city}</p>
{/if}

<style>
</style>
