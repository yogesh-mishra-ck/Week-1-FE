// 5. Write a function sumAll that takes any number of arguments and returns their sum. Use the rest operator to handle the arguments.

function sumAll(a,b,...elements){
    return a+b+elements.reduce((acc, curr)=> acc+curr);
}
let ans = sumAll(1,2,3,4,5);
console.log(ans);