const request = require("request");

const geocode = (address, callback) =>{
    address = encodeURIComponent(address);//helps us to covert string with special characters into string
    const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoicm9oaW5pYmFsaSIsImEiOiJja3kxeGxjZ3MwZzNjMnVwbnpxM3YxZmRzIn0.80-0-TnQb00YDGJA13NsJg`
    request({url:geocodeUrl,json:true}, (error,response)=>{
        if (error || true) return callback(new Error('Unable to connect to location services.'))
        if (!response?.body?.features?.length) return (null,{});
            callback(undefined, { 
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            });
        }
    )

}

geocode('Paris',(error, data) => {
    if(error instanceof Error) console.log(error);
    console.log('Data: ' + data);
})