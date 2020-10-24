// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------
const { getIssPosition } = require('./exercise-3.1');
const { getPositionFromAddress } = require('./exercise-3.2');

const getDistanceFromIss = (address) => {
  // Euclidian distance between two points
  const getDistance = (pos1, pos2) => {
    return Math.sqrt(
      Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
    );
  };

  const distance = getPositionFromAddress(address)
    .then((addressPos) => { 
      return getIssPosition()
    .then((issPos) => {
      return getDistance(addressPos, issPos);
    }); 
    }) 

  return distance;
};

// testing
getDistanceFromIss(
  '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'
).then((response) => console.log(response));
getDistanceFromIss(
  '290 Bremner Blvd, Toronto, ON M5V 3L9'
).then((response) => console.log(response));