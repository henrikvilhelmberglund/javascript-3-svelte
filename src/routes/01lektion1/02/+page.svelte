<script>
	import Profile from "./Profile.svelte";

	const persons = [
		{
			firstName: "Henrik",
			lastName: "Berglund",
			age: "35",
			hobby: "Playing guitar",
		},
		{
			firstName: "Bat",
			lastName: "Man",
			age: "45",
			hobby: "Being a super hero",
		},
		{
			firstName: "Super",
			lastName: "Man",
			age: "25",
			hobby: "Feeling super",
		},
		{
			firstName: "Mr",
			lastName: "Duck",
			age: "20",
			hobby: "Eating bread",
		},
		{
			firstName: "Java",
			lastName: "Script",
			age: "50",
			hobby: "Programming",
		},
	];

	let darkMode = false;
</script>

<!-- without loop -->
<!-- <Profile person={persons[0]}></Profile>
<Profile person={persons[1]}></Profile>
<Profile person={persons[2]}></Profile>
<Profile person={persons[3]}></Profile>
<Profile person={persons[4]}></Profile> -->

<svelte:body />

<main class={darkMode ? "dark" : ""}>
	<section class="m-2 dark:bg-black dark:text-white">
		{#each persons as person}
			<Profile {person} />
		{/each}
		<button on:click={() => (darkMode = !darkMode)}>Toggle darkmode</button>
	</section>
</main>

<style>
</style>
