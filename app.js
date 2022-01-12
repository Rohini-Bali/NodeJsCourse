const request = require('request')
// const showWeather = async() => {
//     const coordinates = await getCoordinates('paris');
//     console.log(coordinates);
//     // const url = `http://api.weatherstack.com/current?access_key=e59a73c717f759bea82bcabb0245ddf4&query=${coordinates.latitude},${coordinates.longitude}`

    // request({ url: url, json: true }, (error, response) => { //you can always lookup for options in the npm package to understand how to modify requests inorder to save yourself from everytime manually converting the data to JSON
    //     //const data = JSON.parse(response.body);  //no need to use this since we added json:true in request options
    //     // console.log(data.location, data.current); // this format will change as shown below
    //     console.log(response.body.location, response.body.current);
    //     console.log(`It is currently ${response.body.current.temperature} in ${response.body.location.name},${response.body.location.country} and we have weather description as ${response.body.current.weather_descriptions[0]}.`);
    //     // 
    //     //Now we will use geocoding to specify places we are looking for weather
    //     //The user needs to give input of address --> convert to lat & Long ---> Fetch Weather

    // });

        



// }
const url = `http://api.weatherstack.com/current?access_key=e59a73c717f759bea82bcabb0245ddf4&query=${coordinates.latitude},${coordinates.longitude}`

request({url:url, json:true}, (error, response) => { //you can always lookup for options in the npm package to understand how to modify requests inorder to save yourself from everytime manually converting the data to JSON
    //const data = JSON.parse(response.body);  //no need to use this since we added json:true in request options
    // console.log(data.location, data.current); // this format will change as shown below
        console.log(response.body.location, response.body.current);
        console.log(`It is currently ${response.body.current.temperature} in ${response.body.location.name},${response.body.location.country} and we have weather description as ${response.body.current.weather_descriptions[0]}.`);
    // 
    //Now we will use geocoding to specify places we are looking for weather
    //The user needs to give input of address --> convert to lat & Long ---> Fetch Weather
     
});


// showWeather();

const geocoding = `https://api.mapbox.com/geocoding/v5/mapbox.places/l2what.json?access_token=pk.eyJ1Ijoicm9oaW5pYmFsaSIsImEiOiJja3kxeGxjZ3MwZzNjMnVwbnpxM3YxZmRzIn0.80-0-TnQb00YDGJA13NsJg`
 request({ url: geocoding, json: true }, (error, response) => {
     if (error){
         console.log('We are facing this '+ error);
     } else {
         if (response.body.features.length === 0)  
         return console.log('We could not find the location with the provided input.')
         const latitude = response.body.features[0].center[1]
         const longitude = response.body.features[0].center[0]
         // console.log(latitude,longitude)
         console.log(`our latitude is: ${latitude} and longitude is: ${longitude}`);
     }
    
})