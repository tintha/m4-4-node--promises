// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
  // takes in an array of words, capitalizes them and returns a new array.
  myPromise = new Promise((resolve, reject) => {
    if (array.every((current) => typeof current === 'string')) {
      const capitalizedArray = array.map((word) => word.toUpperCase());
      resolve(capitalizedArray);      
    } else {
      reject('The array contains elements that are not strings, error!')
    }
  });
  return myPromise;
}

const sortWords = (array) => {
  // takes in an array of words, sorts the words in alphabetical order and return a new array
  myPromise = new Promise((resolve, reject) => {
    if (array.every((current) => typeof current === 'string')) {
      const sortedArray = array.sort();
      resolve(sortedArray);
    } else {
      reject('The array contains elements that are not strings, error!');
    }
  })
  return myPromise;
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
