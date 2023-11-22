<script>
	
	import WeatherCardCreater from "$lib/weatherCardCreater.svelte";

	let place ;

	let weatherdata = null;
	

	async function getWeatherInfo(){
		let res = await fetch("/api",{
					method: 'POST',
					body: JSON.stringify({ 
						place: place
					}),
					headers: {
						'content-type': 'application/json'
					}
		});
		
		weatherdata = await res.json()
		console.log(weatherdata)
	}

	
</script>

<svelte:head>
	<title>Weather Svelte</title>
	<meta name="description" content="An App for Getting the Current Weather Information made using Svelte" />
</svelte:head>


<main>
	<div class="flex px-5 gap-5 mt-2">
		<input bind:value={place} type="text" class="input variant-filled h-10 p-4" aria-label="Search Bar">
		<button on:click={getWeatherInfo} class="btn-icon variant-filled p-2 h-10" aria-label="Search Button"><img src="/search.png" alt="" class="" ></button>
	</div>


	<div class="mt-5 px-2 h-full w-screen">
		{#if weatherdata != null}
			{#await weatherdata}
				<h1 class="h1">
					<span class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">Please wait...</span>
				</h1>
			{:then weatherData} 
					<WeatherCardCreater weather={weatherdata.weather} place={weatherdata.place} ></WeatherCardCreater>
			{:catch error}
				<p>error</p>
			{/await}
		{/if}
	</div>
</main>
