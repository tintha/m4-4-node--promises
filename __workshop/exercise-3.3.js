// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config();

function getAddressFromPosition(lat, lng) {
  const requestObj = {
    key: process.env.OCD_API_KEY,
    q: `${lat}, ${lng}`,
  };

  // return ...
  const result = opencage.geocode(requestObj)
    .then(data => {
      // console.log(JSON.stringify(data));
      return data.results[0].formatted;
    })
    .catch(error => {
      console.log('error', error.message);
    });

  return result;
}

module.exports = { getAddressFromPosition };

// testing
// getAddressFromPosition('48.8584', '2.2945').then((response) =>
//   console.log(response)
// );
// getAddressFromPosition('52.5090125', '13.3792937').then((response) =>
//   console.log(response)
// );
// getAddressFromPosition('45.558232', '-73.551666').then((response) =>
//   console.log(response)
// );
// getAddressFromPosition('45.497118', '-73.579044 ').then((response) =>
//   console.log(response)
// );