<script>
	import {
		selectedGender,
		selectedName,
		selectedSpecies,
		selectedStatus,
		shouldFetch,
	} from "./store";

	export let fetchResult;

	const genders = ["All", "Male", "Female", "Genderless", "Unknown"];
	const species = "All, Human, Alien, Humanoid, Mythological Creature, Animal, Robot".split(", ");
	const statuses = "All, Alive, Dead, Unknown".split(", ");
</script>

<div class="mx-auto flex w-64 flex-col [&>*]:m-2 [&>*]:p-2">
	<input
		on:blur={(e) => {
			$selectedName = e.target.value;
			$shouldFetch = true;
		}}
		type="text"
		placeholder="Name"
		on:keydown={(e) => {
			if (e.code === "Enter") {
				$selectedName = e.target.value;
				$shouldFetch = true;
			}
		}} />
	<select
		on:change={(e) => {
			$selectedGender = e.target.value;
			$shouldFetch = true;
		}}
		name=""
		id="">
		{#each genders as gender}
			<option value={gender}>
				{gender}
			</option>
		{/each}
	</select>
	<select
		on:change={(e) => {
			$selectedSpecies = e.target.value;
			$shouldFetch = true;
		}}
		name=""
		id="">
		{#each species as specie}
			<option value={specie}>
				{specie}
			</option>
		{/each}
	</select>
	<select
		on:change={(e) => {
			$selectedStatus = e.target.value;
			$shouldFetch = true;
		}}
		name=""
		id="">
		{#each statuses as status}
			<option value={status}>
				{status}
			</option>
		{/each}
	</select>
	<button
		on:click={() => {
			fetchResult();
		}}>
		Get characters
	</button>
</div>

<style>
</style>
