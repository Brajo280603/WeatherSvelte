<script>

  export let address ;
  let mainPlaceKeyword ;

  $:{
    
    address = address.split(", ")
    mainPlaceKeyword = address[0];
    address.shift();
    address = address.join(", ")
  }
</script>

<main>
  <div class="">
    <p class="text-2xl">{mainPlaceKeyword}</p>
    <div><p class="text-xs">{address}</p></div>
  </div>
</main>