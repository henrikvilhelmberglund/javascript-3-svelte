<script>
	import { result, selectedGender, selectedName, selectedSpecies, selectedStatus } from "./store";
</script>

<p>
	You're looking for {$selectedName ? `someone named ${$selectedName}` : `anyone`} with
	{$selectedGender === "All" ? " any gender" : ` a ${$selectedGender} gender`} of
	{$selectedSpecies === "All" ? " any species" : ` a ${$selectedSpecies} species`} with
	{$selectedStatus === "All" ? " any status " : ` the status ${$selectedStatus}`}
</p>
{#if result?.info?.count}
	<p class="text-lg font-semibold">
		{result?.info?.count} matching {result?.info?.count > 1 ? "characters" : "character"}
	</p>
{/if}

{#if result.error}
	<p>No characters were found.</p>
{/if}

<style>
</style>
