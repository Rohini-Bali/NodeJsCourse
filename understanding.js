const showCities = (cities) =>{
    // syntax for forEach in javascript array.forEach(element=>{}); 
    cities.forEach(city => {
        console.log(city);
    });
}

const myCities = ['Srinagar', 'Paris', 'Bangalore', 'Pune', 'Mumbai']

showCities(myCities);