// Write a function deepClone that creates a deep copy of a given object. Ensure that nested objects and arrays are properly cloned without retaining references to the original object.
// Example:
// const obj = { a: 1, b: { c: 2 } };
// const clonedObj = deepClone(obj);
// clonedObj.b.c = 42;
// console.log(obj.b.c); // Output: 2


const obj = {
    a : 1,
    b : 2,
    c : {
        d: 3,
        e: {
            "msg": "Hello"
        }
    },
    f: [5,6,7]
};

function deepClone(obj){

    //handling individual values
    if(obj === null || typeof obj !== "object")
        return obj;

    //handling Array
    if(Array.isArray(obj)){
        const copiedArray = [];
        obj.forEach((element, index)=>{
            copiedArray[index] = deepClone(obj[index]);
        })
        return copiedArray;
    }

    //handling objects
    const copiedObj = {};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            copiedObj[key] = deepClone(obj[key]);
        }
    }
    return copiedObj;
}

const newObject = deepClone(obj);

newObject.c.e.msg = "Ready";
newObject.f[0]=22;

console.log("Original ", obj);
console.log("New Object ", newObject);
