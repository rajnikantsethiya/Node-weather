const request = require("postman-request");
const geocode = require("../weather-app/utils/geocode");
const forecast = require("../weather-app/utils/forecast");
// const url =
//   "http://api.weatherstack.com/current?access_key=015160df4788022a7325d3bc8f7d3692&query=36.2324,%20-122.1223";
// request({ url: url, json:true }, (error, response) => {
//     console.log(`Its currently ${response.body.current.temperature}'c out there but feels like ${response.body.current.feelslike}'c`);
// });

//  // Trying to use GeoAPIfy for trial and error

// // working URL
// const workingUrl = 'https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=bebd46103e584a559fa1cc8832828bf0';
// const wrongLocation = 'https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20123xavier&apiKey=bebd46103e584a559fa1cc8832828bf0';

// // Broken url
// const brokenUrl = 'https://api.geoapify.com/v1/geocode/search?text=&apiKey=bebd46103e584a559fa1cc8832828bf0';
// request(
//   {
//     url: wrongLocation,
//     json: true,
//   },
//   (error, response) => {
//     if (error) {
//       console.log("Unable to connect to network"); // No internet connection
//     } else if (response.statusCode !== 200 || response.body.features.length) {
//         console.log("Unable to find location", response.statusCode);
//     } else {
//       const lat = response.body.features[0].geometry.coordinates[1];
//       const lon = response.body.features[0].geometry.coordinates[0];
//       console.log(
//         `here you go with the lat and lon details, Latitude: ${lat} and Longitude: ${lon}`
//       );
//     }
//   }
// );

const address = process.argv[2];

if (address) {
  geocode(process.argv[2], (error, { latitude, longitude, location } = {}) => {
    if (error) console.log(error);
    else {
      console.log(location);
      forecast(latitude, longitude, (error, data) => {
        if (error) console.log(error);
        else console.log(data);
      });
    }
  });
} else {
  console.log("Please provide a valid location");
}
