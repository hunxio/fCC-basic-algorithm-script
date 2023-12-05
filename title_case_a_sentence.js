/*
 *   Return the provided string with the first letter of each word capitalized.
 *   Make sure the rest of the word is in lower case.
 *   For the purpose of this exercise, you should also capitalize connecting words like the and of.
 */

function titleCase(str) {
  // Starting by removing with .split() every space.
  const result = str.split(" ");
  // Creating an empty array where we will later on add our new sentence.
  const arr = [];
  // Cyclying with a for loop for every word in our result = ("[ 'I\'m', 'a', 'little', 'tea', 'pot' ]
  for (let word in result) {
    // arr will contain the new word modified, in position 0 it will be converted in upper case;
    arr[word] =
      result[word][0].toUpperCase() + result[word].slice(1).toLowerCase();
    // from position 1+ they will converted in lower case.
  }
  //we add inbetween the words the space.
  return arr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
