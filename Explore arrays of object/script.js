// ! reference

const obj1 = { name: "aeuab", rolllnumber: 23 };
const obj2 = obj1;
obj2.name = "aman";
// console.log(obj1 , obj2  , "thus us sgit");

// ! passing obj to a function
const incrementAge = (personObj) => {
  personObj.age += 1;
};
const bob = { name: "aruan", age: 34 };
// console.log("before" ,  bob);
incrementAge(bob);
// console.log("after" ,  bob);

// ! managing a list of students
const students = [
  { id: 1, name: "aryan", grade: "A" },
  { id: 2, name: "aman", grade: "B" },
];
const student1 = students[0];
// console.log(student1.name);

// !add new student
const addStudent = (id, name, grade) => {
  // const newStd = {id:id , name:name , grade:grade}
  const newStd = { id, name, grade }; // new method
  students.push(newStd);
};
addStudent(3, "aryandd", "C");
// console.log(students);

// ! upgrade student
const upgradeStudent = (id, newgrade) => {
  // search student by using id
  const studentFound = students.find((student) => {
    return student.id === id;
  });
  if (studentFound) {
    studentFound.grade = newgrade;
  } else {
    // console.log("student not found");
  }
};

upgradeStudent(2, "F");
// console.log(upgradeStudent);
// console.log(students);

// ! arrays in Obj

// !simple todo list
const todoList = {
  title: "todo List Application",
  todo: [
    { id: 1, description: "buy somthing", completed: false },
    { id: 2, description: "call mom", completed: true },
    { id: 3, description: "read book", completed: false },
  ],
};

// ! accessing property
const todoTitle = todoList.title;
// acess all task
const allTask = todoList.todo;
// console.log(allTask);
//  add new todo or new task
// const addNewTask = (id, task , completed)=>{
//     const newTask = {id, task , completed}
//     allTask.push(newTask)
// }
// console.log(todoList);
// addNewTask(4 , "this is new task" , true)
// console.log(todoList);
const addNewTask = (description, completed) => {
  const newId = allTask.length + 1;
  const newTodo = {
    id: newId,
    description,
    completed,
  };
  // push new task in new todo
  allTask.push(newTodo);
};
addNewTask("this is latest task", true);
// console.log(todoList);

// ! function to mark to task compleated

const markAsCompleat = (id) => {
  // find that id
  const oldId = allTask.find((task) => {
    return task.id === id;
  });
  if (oldId) {
    oldId.completed = !oldId.completed;
  } else {
    // console.log("id not found");
  }
};
// console.log(todoList);
markAsCompleat(2);
// console.log(todoList);

// ! for each method

const fruits = [
  {
    name: "apple",
    color: "red",
  },
  {
    name: "banana",
    color: "yellow",
  },
  {
    name: "chary",
    color: "red",
  },
];

fruits.forEach((ele, index, arrays) => {
  // console.log(ele, index);
});

//  shoping cart model

const cart = [
  { name: "laptop", price: 1000, quantity: 1 },
  { name: "headphone", price: 100, quantity: 2 },
  { name: "tv", price: 1500, quantity: 1 },
  { name: "MObile", price: 400, quantity: 2 },
];
let totalCost = 0;
cart.forEach((item) => {
  totalCost += item.price * item.quantity;
});
// console.log( "this is total price ",totalCost)

let totalItem = [];
cart.forEach((item) => {
  totalItem.push(item.name);
});
// console.log("total item is" , totalItem);

let totalProduct = 0;
cart.forEach((item) => {
  totalProduct += item.quantity;
});
// console.log("this is toal product you buy" , totalProduct);

// ! Map function shoping cart we wnat to apply 10% discount

const shoppingCart = [
  { name: "laptop", price: 1000, quantity: 1 },
  { name: "headphone", price: 100, quantity: 2 },
  { name: "tv", price: 1500, quantity: 1 },
  { name: "MObile", price: 400, quantity: 2 },
];

// add 10% discount
const newPrice = shoppingCart.map((product) => {
  return {
    name: product.name,
    price: product.price * 0.9,
  };
});

// console.log("after discount your product is", newPrice);

//! product name only !
const allProduct = shoppingCart.map((product) => {
  return {
    name: product.name,
  };
});
// console.log("all product is hear", allProduct);

// ! Filter
// const user = [
//   {
//     id: 1,
//     name: "Aryan",
//     isActive: false,
//   },
//   {
//     id: 2,
//     name: "aman",
//     isActive: true,
//   },
//   {
//     id: 3,
//     name: "umang",
//     isActive: true,
//   },
// ];
//  filter out all active users
// const activeUser = user.filter((user) => {
//   return user.isActive === true;
// });
// console.log("this is active user", activeUser);
// transaction above a certain amount
const transaction = [
  { id: 1, amount: 50 },
  { id: 2, amount: 30 },
  { id: 3, amount: 90 },
];
// filter out all amount above 100
const amountUpper100 = transaction.filter((amo) => {
  return amo.amount >= 50;
});

// console.log(amountUpper100);

// ! splice() transformation and manipulation using splice method
// remove inactive users

const user = [
  {
    id: 1,
    name: "Aryan",
    isActive: true,
  },
  {
    id: 2,
    name: "aman",
    isActive: false,
  },
  {
    id: 3,
    name: "umang",
    isActive: false,
  },
];
// remove  inactive users
// find the index of the users to be removed
const indexToRemove = user.findIndex((user) => {
  return !user.isActive;
});
// console.log(indexToRemove);

if (indexToRemove !== -1) {
  user.splice(indexToRemove, 1);
}
// console.log(user);

// ! managing playlist
// ! develop a playlist for music striming app , user add and remove song to there playlist.
// ! each playlist is an array of song obj. we have implement feature that allows the userto delete a song ,
// !  move a song up or down the playlist , and insert a song at a perticular index

//solution
const playList = [
  { id: "s1", title: "Song 1", artist: "Artist A" },
  { id: "s2", title: "Song 2", artist: "Artist B" },
  { id: "s3", title: "Song 3", artist: "Artist C" },
  { id: "s4", title: "Song 4", artist: "Artist D" },
];
// remove songe of id s1
const findIndexRemove = playList.findIndex((song) => song.id === "s1");
console.log(findIndexRemove);

//! using splice()

// if (findIndexRemove !== -1) {
//   playList.splice(findIndexRemove , 1 )
// }
// console.log(playList);

// !move  the song of id to third position
const indexToMove = playList.findIndex((song) => song.id === "s1");
if (indexToMove !== -1) {
  const [songToMove] = playList.splice(indexToMove, 1);
  playList.splice(3, 0, songToMove);
}
// console.log(playList);

// Insert new song
const NewSOng = { id: "s5", title: "Song 5", artist: "Artist E" };
playList.splice(playList.length, 0, NewSOng);
// console.log(playList);

// ! Updating student prop in a class Using Object.assign() method
const students1 = [
  { id: 1, name: "Aryan", grede: "A" },
  { id: 2, name: "Aman", grede: "B" },
];
//Greade Structure
const gradeUpdate = [{grede:"A+"} , {grede:"B+"}]
const newGrade = students1.map((student , index)=>{
  return Object.assign({} , student , gradeUpdate[index])
})
console.log(newGrade);
