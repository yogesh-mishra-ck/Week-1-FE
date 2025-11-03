// Write a function flattenArray that takes a nested array and returns a flattened array. Use recursion and/or ES6 methods to solve this problem.
// Example:
// flattenArray([1, [2, [3, [4, 5]]]]); // Output: [1, 2, 3, 4, 5]

function flattenArray(element){
    let ans = [];
    if(Array.isArray(element)){
        for(let ele of element){
            let returnedArray = flattenArray(ele);

            //insert returned array all elements in ans either by this or loop can also be used
            ans.push(...returnedArray);
        }
    }else{
        ans.push(element);
    }
    return ans;
}

const ans = flattenArray([1, [2, [3, [4, 5]]]]);
console.log(ans);