// 8. Write a function findMax that takes an array of numbers and returns the largest number in the array. Use the spread operator.
// Example:
// findMax([3, 5, 7, 2, 8]); // Output: 8

function findMax(arr){
    return Math.max(...arr);
}

let largestNumber = findMax([3,5,7,2,8]);
console.log(largestNumber);