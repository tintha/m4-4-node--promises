// Exercise 2.3 - Use the error
// ----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// get the code you wrote in 2.2 and paste it here...
const greeting = (langCode) => {
  let code = langCode;
  return request(`https://journeyedu.herokuapp.com/hello/${code}`) // 1
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      return parsedResponse.data; // 2
    })
    //.catch((err) => console.log('Error: ', err));
    .catch((err) => {
      return err.error ? JSON.parse(err.error) : err;
    });
};

// Testing
greeting('french').then((result) => console.log(result)); // error
greeting('fr').then((result) => console.log(result)); // success