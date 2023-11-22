<script>
	import { onMount } from "svelte";
	import CurrentWeatherCard from "./currentWeatherCard.svelte";
  import AddressCard from './addressCard.svelte'
  export let weather;
  export let place;


</script>

<main>



  <div class="w-screen h-full flex flex-col gap-5">
    <AddressCard address = {place}></AddressCard>
    

    {#each weather as info, index }
    {#if index == 0}
      
      <CurrentWeatherCard weatherData={info}></CurrentWeatherCard>
    <!-- {:else} -->
      <!-- <p>something else for others</p> -->
    {/if}
      
    {/each}
  </div>
</main>

