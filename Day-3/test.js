let a = 10;
let b= 20;

let temp  =a;
a = b;
b = temp;

console.log(a);
console.log(b);

// function Person(){
//     this.age = 23;

//     setTimeout(()=>{
//         console.log(this.age);
//     },1000)
// }
// var p = new Person();

// class Rectangle{
//     constructor(length, width){
//         this.length = length;
//         this.width = width;
//     }

//     get area(){
//         return t
//     }

//     set dimensions({ width, height }){
//         this.width = width;
//         this.height = height;
//     }
// }

// function fn(){
//     this.log = function(){
//         console.log(this);
//         console.log("Hi")
//     }
// }

// var f = new fn();
// f.log();

const map = new Map([
    [a,1],
    [b,2]
]);

for(let [key, value] of map){
    console.log(key, value);
}

var obj = {
    a:10,
    b:20,
    c: {
        d:15
    }
}

var obj2 = {...obj}
obj2'd and obj's d are same since they point to the same location, 
a and b are different of obj and obj2 
