/*
 *   Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
 *   This means that given an element x, the 'truth test' is passed if func(x) is true.
 *   If no element passes the test, return undefined.
 */

function findElement(arr, func) {
  let num = 0;
  // Creating a for loop cycling through the array (arr) given.
  for (let i = 0; i < arr.length; i++) {
    // Depositing each value in our variable num of the given array
    num = arr[i];
    // Every number it gets deposited it will go trough a check if it is verified in the given func (function)
    if (func(num)) {
      // The function will return the first num (if it exist) as a result of the findElements function
      return num;
    }
  }
}

console.log(findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0));
