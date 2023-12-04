// Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
  //Creating a num that will define how much to slice, which will equal to the length of our target word.
  let num = target.length;
  // Slicing our str(string) by the length of our target word.
  let slicing = str.slice(-num);
  // If/else statement where if sliced word equal to the target word then return true, otherwise false.
  if (slicing == target) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Bastian", "n"));
