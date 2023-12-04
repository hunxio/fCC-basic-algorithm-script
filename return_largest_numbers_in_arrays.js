/* 
*  Return an array consisting of the largest number from each provided sub-array. 
*  For simplicity, the provided array will contain exactly 4 sub-arrays.
*/

function largestOfFour(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let value = -Infinity;
        for (let j = 0; j < arr[i].length; j++) {
            if (value < arr[i][j]) {
                value = arr[i][j];
            };
        }
        result.push(value);
    };
    return result;
  }
  
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
