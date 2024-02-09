const request = require('postman-request');

// I am using weather stack api for forecast as unbale to get it from positionstack.com and geoapify.com
const forecast = (lat, lon, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=015160df4788022a7325d3bc8f7d3692&query=${lat},${lon}`;
    request({ url: url, json: true }, (error, response) => {
      if (error) {
        callback(`Unable to connect due to ${error}`, undefined);
      } else if (response.body.error) {
        callback(
          `Location services are temperorily down please try other location`
        );
      } else {
          const { temperature, feelslike } = response.body.current;
        callback(undefined, 
            `Its currently ${temperature}'c out there but feels like ${feelslike}'c`
        );
      }
    });
  };

  module.exports = forecast;