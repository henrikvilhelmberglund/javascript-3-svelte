import { writable } from "svelte/store";

export let selectedName = writable("");
export let selectedGender = writable("All");
export let selectedSpecies = writable("All");
export let selectedStatus = writable("All");
export let shouldFetch = writable(false);
export let result = writable([]);
