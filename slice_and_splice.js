/*
 *   You are given two arrays and an index.
 *   Copy each element of the first array into the second array, in order.
 *   Begin inserting elements at index n of the second array.
 *   Return the resulting array. The input arrays should remain the same after the function runs.
 */

function frankenSplice(arr1, arr2, n) {
  // arr and result will be two empty arrays, arr will host the temporary answer, result will have the final answer
  let arr = [];
  let result = [];
  // ending and starting will slice the the pieces of code we will need to modify the order later on in arr and result
  const ending = arr2.slice(n); // a
  const starting = arr2.slice(0, n); // b
  // pushing into arr the correct order for the solution
  arr.push(starting, arr1, ending);
  // looping into the first array
  for (let i = 0; i < arr.length; i++) {
    // looping into the second array
    for (let j = 0; j < arr[i].length; j++) {
      // pushing every single data into the final arrray, result
      result.push(arr[i][j]);
    }
  }
  //return the final result. [Check the comment below for a second easier and faster solution]
  return result;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));

/*
 * Another way to make this exercise easier is to just return the sliced parts in the order we need, here is how:
 * return [...arr2.slice(0,n), ...arr1, ...arr2.slice(n)]:
 * ...arr2.slice(0,n) = 4 // ...arr1 = 1, 2, 3 // ...arr2.slice(n) = 5 //
 * Easier and faster, still was fun trying out the tedious way :P
 *  */
