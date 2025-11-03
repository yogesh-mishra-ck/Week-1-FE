// 9. Given the following data:
// const data =[
//   {
//     name: "Bob",
//     age: 24
//   },
//   {
//     name: "Alice",
//     age: 21
//   }
// ]
// Write a function that extracts the age as  “24”  and name as “Alice” and returns a sentence: "Alice’s age is 24."

const data =[
  {
    name: "Bob",
    age: 24
  },
  {
    name: "Alice",
    age: 21
  }
]

const [{age}, {name: _name}] = data;
console.log(`${_name}'s age is ${age}`);