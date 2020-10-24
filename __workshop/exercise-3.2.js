// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config();

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: process.env.OCD_API_KEY,   
    q: address
  };

  const result = opencage.geocode(requestObj)
    .then(data => {
      //console.log(JSON.stringify(data));
      return data.results[0].geometry;
    })
    .catch(error => {
      console.log('error', error.message);
    });

  return result;

}

module.exports = { getPositionFromAddress };
// testing
// getPositionFromAddress(
//  '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'
// ).then((response) => console.log(response));
// getPositionFromAddress(
//   '4141 Pierre-de Coubertin Ave, Montreal, Quebec H1V 3N7'
// ).then((response) => console.log(response));
// getPositionFromAddress(
//   '290 Bremner Blvd, Toronto, ON M5V 3L9'
// ).then((response) => console.log(response));
// getPositionFromAddress(
//   'Leipziger Pl. 9, 10117 Berlin, Germany'
// ).then((response) => console.log(response));
