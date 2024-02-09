const request = require('postman-request');

const geocode = (address, callback) => {
    const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
      address
    )}&apiKey=bebd46103e584a559fa1cc8832828bf0`;
  
    request({ url: url, json: true }, (error, { body }) => {
      if (error) {
        callback(`Unable to connect due to ${error}`, undefined);
      } else if (body.features.length === 0) {
        callback(
          `Location services are temperorily down please try other location`
        );
      } else {
        const { lat, lon, formatted } = body.features[0].properties;
        console.log(body, url);
        callback(undefined, {
          latitude: lat,
          longitude: lon,
          location: formatted,
        });
      }
    });
  };

  module.exports = geocode;