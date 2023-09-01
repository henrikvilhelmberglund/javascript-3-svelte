<script>
	import InfoText from "./components/InfoText.svelte";
	import Inputs from "./components/Inputs.svelte";
	import Characters from "./components/Characters.svelte";
	import { onMount } from "svelte";
	import {
		result,
		selectedGender,
		selectedName,
		selectedSpecies,
		selectedStatus,
		shouldFetch,
	} from "./components/store";

	const API = "https://rickandmortyapi.com/api/character/?";

	$: dependencyFunction($selectedName, $selectedGender, $selectedSpecies, $selectedStatus);

	function dependencyFunction(selectedName, selectedGender, selectedSpecies, selectedStatus) {
		if ($shouldFetch) {
			fetchResult();
		}
	}

	async function fetchResult() {
		// old version
		// const finalQuery = `
		//   ${selectedName ? "name=" + selectedName + "&" : ""}
		//   ${selectedGender !== "All" ? "gender=" + selectedGender + "&" : ""}
		//   ${selectedSpecies !== "All" ? "species=" + selectedSpecies + "&" : ""}
		//   ${selectedStatus !== "All" ? "status=" + selectedStatus : ""}
		//   `
		//   // this breaks mythological creature
		//   .replaceAll(" ", "")
		//   .replaceAll("\n", "");

		const query = [];
		if ($selectedName) query.push(`name=${encodeURIComponent($selectedName)}`);
		if ($selectedGender !== "All") query.push(`gender=${encodeURIComponent($selectedGender)}`);
		if ($selectedSpecies !== "All") query.push(`species=${encodeURIComponent($selectedSpecies)}`);
		if ($selectedStatus !== "All") query.push(`status=${encodeURIComponent($selectedStatus)}`);
		const finalQuery = query.join("&");

		const response = await fetch(`${API}${finalQuery}`);
		const data = await response.json();
		console.log(`${API}${finalQuery}`);
		console.log(data);
		$result = data;
	}
</script>

<h1>Rick & Morty - How many characters</h1>
<main class="mx-auto flex flex-col">
	<Inputs {fetchResult} />
	<InfoText />
	<section class="mx-auto flex w-[70vw] flex-wrap justify-start">
		<Characters />
	</section>
</main>

<style>
</style>
