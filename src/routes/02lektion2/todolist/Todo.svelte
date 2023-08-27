<script>
	import { todos } from "./store";

	export let todo;
	export let i;

	$: ({ title, description, completed } = todo);

	function removeTodo(i) {
		$todos.splice(i, 1);
		$todos = $todos;
	}

	function toggleComplete(i) {
		$todos[i].completed = !$todos[i].completed;
	}
</script>

<div class="m-2 rounded-xl bg-blue-200 p-4">
	<h4 class="{completed ? 'text-green-500' : ''} text-xl">{title}</h4>
	{#if completed}
		<p>{description}</p>
	{/if}
	<button class="border-black border-1 rounded-md p-1" on:click={() => removeTodo(i)}>Remove Todo</button>
	<input type="checkbox" checked={completed} on:change={() => toggleComplete(i)} name="" id="" />
</div>

<style>
</style>
