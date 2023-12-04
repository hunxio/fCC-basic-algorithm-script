/*
 *  Repeat a given string str (first argument) for num times (second argument).
 *  Return an empty string if num is not a positive number.
 */

function repeatStringNumTimes(str, num) {
  // Creating a variable with an empty string as value;
  let result = "";
  //Cycling our index many times as num's value.
  for (let i = 0; i < num; i++) {
    //Adding up to our empty result, str many times as our index cycles to fulfill the for loop.
    result += str;
  }
  //Returning result as a solution for our function.
  return result;
}

console.log(repeatStringNumTimes("abc", 3));
