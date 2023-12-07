/*
 *   Remove all falsy values from an array. Return a new array; do not mutate the original array.
 *   Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 *   Hint: Try converting each value to a Boolean.
 */

function bouncer(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    // Whenever the values in the array arr aren't true, push them into result.
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(bouncer([7, "ate", "", false, 9]));

//  You can also solve it using this single line : return arr.filter(Boolean);
