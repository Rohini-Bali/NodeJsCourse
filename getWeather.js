const request = require('request');

const getWeather = (latitude,longitude,callback) => {
    const weatherUrl = `http://api.weatherstack.com/current?access_key=e59a73c717f759bea82bcabb0245ddf4&query=${latitude},${longitude}`

    request({ url: weatherUrl, json: true }, (error, response) => {
        if(error){
            callback(undefined, 'Unable to connect to weather API.')
        } else if (response.body.current===[]) {
            callback(undefined, 'Unable to get current data from weather API.')
        } else{
            
            callback(`It is currently ${response.body.current.temperature} in ${response.body.location.name},${response.body.location.country} and we have weather description as ${response.body.current.weather_descriptions[0]}.`, undefined);

        }
        
        // 
        //Now we will use geocoding to specify places we are looking for weather
        //The user needs to give input of address --> convert to lat & Long ---> Fetch Weather

    });

}

getWeather(,,)