/*
* Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
* The returned value should be a number.
* For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
* Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] 
* and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

function getIndexToIns(arr, num) {
  // Inserting all the values we have to valuate into the array
  arr.push(num);
  // Using a function taking two parameters (a,b), comparing them and if the first parater gives a negative result a goes before b, viceversa a goes after b.
  arr.sort(function(a, b){ return a - b})
  // Returning the position of the num we are looking for after sorting
  return arr.indexOf(num)
}

console.log(getIndexToIns([2, 20, 10], 50));