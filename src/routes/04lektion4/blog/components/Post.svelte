<script>
	import { onMount } from "svelte";
	import UserInfo from "./UserInfo.svelte";
	export let post;

	$: ({ userId, title, body, id } = post);

	let showUser;
	let comments = [];
	onMount(() => {
		async function fetchComments() {
			const response = await fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${id}`);
			const data = await response.json();
			comments = data;
		}
		fetchComments();
	});
</script>

<article class="outline-solid m-4 p-2 outline-1 outline-amber-400">
	<h2 class="text-2xl">{title}</h2>
	<p>{body}</p>
	{#if showUser}
		<UserInfo {userId} />
	{/if}
	<button on:click={() => (showUser = !showUser)}>
		{showUser ? "Hide" : "Show"} user info
	</button>
	{#each comments as { name, body }}
		<div>
			<span class="font-semibold">{name}: </span>
			<span>{body}</span>
		</div>
	{/each}
</article>

<style>
</style>
