// 7. Write a function doubleValues that takes an array of numbers and returns a new array where each number is doubled. Use the map method.
// Example:
// doubleValues([1, 2, 3]); // Output: [2, 4, 6]

function doubleValues(arr){
    return arr.map((currentNumber)=>{
        return currentNumber*2;
    })
}

const doubled = doubleValues([1,2,3]);
console.log(doubled);