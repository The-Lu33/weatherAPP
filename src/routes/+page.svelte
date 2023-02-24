<script>
	import Spinner from '../components/Spinner.svelte';
	import Taget from '../components/Taget.svelte';
	import { weatherapi } from '../services/weather';

	let isLoading = true;
	const weatherPromise = weatherapi().then((weather) => {
		isLoading = false;
		return weather;
	});
</script>

<section>
	{#if isLoading}
		<Spinner />
	{:else}
		{#await weatherPromise}
			<Spinner />
		{:then weather}
			<Taget {weather} />
		{:catch error}
			<p>{error.message}</p>
		{/await}
	{/if}
</section>

<style>
	section {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
