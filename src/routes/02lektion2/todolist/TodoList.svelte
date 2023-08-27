<script>
	import Todo from "./Todo.svelte";
	import { todos } from "./store";

	let todoTitle;
	let todoDesc;
</script>

<div>
	<h3 class="text-3xl">TODOs</h3>
	<label for="todoTitle">Title</label>
	<br />
	<input type="text" bind:value={todoTitle} id="todoTitle" />
	<br />
	<label for="todoDesc">Description</label>
	<br />
	<input bind:value={todoDesc} type="text" id="todoDesc" />
	<br />
	<button
		on:click={() =>
			($todos = [...$todos, { title: todoTitle, description: todoDesc, completed: false }])}>
		Add TODO
	</button>
	{#each $todos as todo, i}
		<Todo {todo} {i} />
	{/each}
</div>

<style>
</style>
