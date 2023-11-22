export async function POST({request}){
    let data = await request.json()
    let weatherInfo = await weatherFinder(data.place);
    return new Response(JSON.stringify(weatherInfo));
}


async function weatherFinder(place){
    
    let weatherInfoComplete;

    try{
        //___finding Place
        let placeFetchString = `https://nominatim.openstreetmap.org/search?q=${place}&format=json&addressdetails=1&limit=1`
        let placeJson = await fetch(placeFetchString);
        placeJson =  await placeJson.json()
        placeJson = placeJson[0];
    
        //___finding weather
        let weatherFetchString = `https://api.met.no/weatherapi/locationforecast/2.0?lat=${placeJson.lat}&lon=${placeJson.lon}`
        let weatherJson = await fetch(weatherFetchString);
        weatherJson = await weatherJson.json();
        // let weatherInfoComplete = weatherJson.properties.timeseries
        weatherInfoComplete = {
            weather:weatherJson.properties.timeseries,
            place:placeJson.display_name
        }

    }catch{
        weatherInfoComplete = {
                weather:[],
                place:"Place Not Found!"
        }
    }

    return weatherInfoComplete;
}