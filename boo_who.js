/*
 *   Check if a value is classified as a boolean primitive.
 *   Return true or false.
 *   Boolean primitives are true and false.
 */

function booWho(bool) {
  // Using the strict equality (===), to only pass true and false as "true" result.
  if (bool === true || bool === false) {
    return true;
  }
  // If the value isn't either true or false, it will return false.
  else {
    return false;
  }
}

console.log(booWho(1));
