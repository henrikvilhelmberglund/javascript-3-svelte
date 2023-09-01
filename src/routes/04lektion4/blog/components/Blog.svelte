<script>
	import Post from "./Post.svelte";
	import { onMount } from "svelte";

	let posts = [];
	onMount(() => {
		async function getPosts() {
			const response = await fetch("https://jsonplaceholder.typicode.com/posts");
			const data = await response.json();
			posts = data;
			// console.log(posts);
		}
		getPosts();
	});
</script>

<div>
	<h1 class="text-xl">Blog</h1>
	{#each posts as post}
		<Post {post} />
	{/each}
</div>

<style>
</style>
