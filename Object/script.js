// ! ==--------===
// ! object creation 

// const book = {
//     title:"Harry porter",
//     author:"J.K rowling",
//     available : "true",
//     price : 99.99
// }
// // console.log(book);
// const acc= book.author
// console.log(acc);

//! -- obj access using [] bracket
const book = {
    title:"Harry porter",
    author:"J.K rowling",
    available : "true",
    price : 99.99
}

console.log(book["title"]);
const onjnew = {
    'first char': "Aryan",
    name:"umang",
}
console.log(onjnew["first char"]);

const task = {
    des : "this is my task",
    incomplete: false 
}
const query = "incomp" + "lete"
console.log(task[query]);

// ! add new property in object
const oldprop = {
    name : "Aryan",
    age:23,
    person:{
        name : "aman",
    }
}
oldprop.person.newKey = "newValue";
oldprop.numebr=998712756
oldprop["lastname"] =  "Kumar" 
// oldprop.person ={numebr:939287742}
console.log(oldprop);

const oldprops = {
    name: "Aryan",
    age: 23,
    person: {
        name: "aman",
    }
};

//! Adding new data to the 'person' object
oldprops.person.newKey = "newValue";
oldprops.person.age = 30;

console.log(oldprops);

// ! function declaration