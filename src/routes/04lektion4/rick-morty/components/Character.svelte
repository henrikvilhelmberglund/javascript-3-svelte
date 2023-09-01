<script>
	export let character;
	$: ({
		name,
		image,
		species,
		gender,
		type,
		status,
		origin: { name: originName },
	} = character);
</script>

<article class="outline-solid m-2 min-h-[300px] min-w-[300px] rounded-xl outline-1 outline-black">
	<img alt={name} class="relative left-0 rounded-xl" src={image} />
	<p class="font-semibold">{name}</p>
	<span class="">
		{species}
		{gender.toLowerCase()}
		{type.toLowerCase()}
	</span>
	<p class="">{status}</p>
	<p class="">{originName}</p>
</article>

<style>
</style>
