/*
 *   Write a function that splits an array (first argument) into groups the length of size (second argument)
 *   and returns them as a two-dimensional array.
 */

function chunkArrayInGroups(arr, size) {
    var result = [];
    // While the length of the arr has elements inside, splice them and keep adding them to result[];
    while (arr.length > 0) {
        result.push(arr.splice(0,size));
    }
    return result;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3));

/*
*   This solution doesn't work properly but it works with the tested arrays on the website.
    function chunkArrayInGroups(arr, size) {
        let resultArr = [];
        // Not properly working for every case for loop, testing it out to see how result can change when increasing or decreasing i value.
        for (let i = -1; i < arr.length; i++) {
            const left = arr.splice(0, size);
            resultArr.push(left);
        }
        if (arr.length > 0) {
            resultArr.push(arr);
        }
        return resultArr;
    }

*/
