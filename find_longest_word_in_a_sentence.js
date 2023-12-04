/*
 *  Return the length of the longest word in the provided sentence.
 *  Your response should be a number.
 */

function findLongestWordLength(str) {
  let result = 0;
  const wordDefinition = /\w+/g;
  const words = str.match(wordDefinition);
  for (let i = 0; i < words.length; i++) {
    if (result < words[i].length) {
      result = words[i].length;
    }
  }
  return result;
}

console.log(
  findLongestWordLength(
    "What if we try a super-long word such as otorhinolaryngology"
  )
);
