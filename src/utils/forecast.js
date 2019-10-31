const request = require("request");

const forecast = (lat, long, callback) => {
  const url =
    "https://api.darksky.net/forecast/2e09158f5ba7ca7ac32f093cd21d0720/" +
    lat +
    "," +
    long +
    "?units=si";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location");
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          " It is currently " +
          body.currently.temperature +
          " degrees out. There's a " +
          body.currently.precipProbability +
          "% chance of rain. Wind speed is " +
          body.currently.windSpeed +
          " m/s."
      );
    }
  });
};

module.exports = forecast;
