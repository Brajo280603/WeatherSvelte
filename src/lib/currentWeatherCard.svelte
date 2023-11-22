<script>
  import legend from './legend.json'
  export let weatherData ;


  let date;
  let weatherStatus;
  $:{
    date = new Date(weatherData.time)

    let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const d = new Date();
    month = month[d.getMonth()];

    date= `${date.getDate()} ${month}`

    weatherStatus = weatherData.data.next_1_hours.summary.symbol_code.split("_")
    weatherStatus = legend[weatherStatus[0]].English
    

   
  }
</script>

<main>
  <p>{date}</p>

  <p class="text-7xl font-bold my-5 ms-2">{`${weatherData.data.instant.details.air_temperature}°`}</p>

  <div class="flex gap-3 content-center ">
    <p class="align-bottom">{weatherStatus}</p>
    <img class="img h-10 w-10" src="{"/weather_icons/"+weatherData.data.next_1_hours.summary.symbol_code+".svg"}" alt="">
  </div>
</main>