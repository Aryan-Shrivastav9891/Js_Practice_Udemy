// ! arrow function ===
// basic syntax
// onject function
const fun1 = () => {
  return {
    name: "aryan",
    age: 32,
  };
};
// console.log(fun1());

// Simplest way
const fun2 = () => ({ name: "Aryan", age: 12 });
// console.log(fun2());

// ! Destructuring in Es6

// basic
const num = [1, 2, 3, 4, 5, 6];
const [first, second, s] = num;
// console.log(s);

// swap variables
let a = 1;
let b = 2;
[a, b] = [b, a];
// console.log(a, b);

// ! Object destructuring
// const { name, age, value } = { name: "aryan", age: 23, value: "somthing" };
// console.log(name, age, value);

// ! destructuring parameter

// function greet(userObj) {
//   return `this is my age ${userObj.name} and my age is ${userObj.age}`;
// }
// const data = { name: "aryan", age: 23 };
// greet(data);
// console.log(greet(data));
// ! new method !

// function greet2({ name, age }) {
//   return `this is my age ${name} and my age is ${age}`;
// }
// const data1 = { name: "aryan", age: 23 };
// greet(data1);
// console.log(greet2(data1));

// ! destructuring nested data
const {Name ,age, info:{id , RollNumber}} = {
    Name : "aman",
    age:23 , 
    info:{
        id:12,
        RollNumber:1212
    },
    numebr: 982398239
}
console.log(Name , age , id , RollNumber);
