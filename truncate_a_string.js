/*
 *   Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
 *   Return the truncated string with a ... ending.
 */
function truncateString(str, num) {
  let result = "";
  //Looping through our index while it is less than the value of num.
  for (let i = 0; i < num; i++) {
    //Storing in result every letter that has been processed in the loop.
    result += str[i];
  }
  //Making an if/else statement, this is to prevent that our code returns undefined in our string, so we just return the string as a result of our function.
  if (num < str.length) {
    return result + "...";
  } else {
    return str;
  }
}
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    8
  )
);

/*
*  You can also try with
*   ("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) 
*   to better understand the if/else statement
*/