// 6. Write a function filterEvens that takes an array of numbers and returns a new array containing only the even numbers. Use the filter method.
// Example:
// filterEvens([1, 2, 3, 4, 5, 6]); // Output: [2, 4, 6]

function filterEvens(arr){
    return arr.filter((currentNumber)=>{
        return currentNumber%2 === 0;
    });
}

let arr = [2,4,6,99,232,21,90,32,8,9];
let ans = filterEvens(arr);
console.log(ans);

let ans2 = filterEvens([1, 2, 3, 4, 5, 6]);
console.log(ans2);