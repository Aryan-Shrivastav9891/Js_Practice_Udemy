// ! function declaration
// function sayhello(){
//     console.log("hello");
// }
// function gret(){
//     console.log("hello how are you");
// }
// function date(){
//     const cyrrdate = new Date().getDate()
//     console.log(`today date is ${cyrrdate}`);
    
// }
// sayhello()
// gret()
// date()
// ! function expression

// const sayhello = function(){
//     console.log("hello how are you");
// } 
// sayhello()

//!- anonyms function 
// ! iife 
(function(){
        console.log("hello this is iife");
        
    }
)();

( function(){
        let x = 21
        console.log(x*x);
    }
)();

// ! parameter and arguments
const gret = function(name , age){
    console.log(`my name is ${name} and mu age is ${age}`);
    
}
gret("aryabn" , 23)

// ! return function ex
const returnsome = function(a , b){
    const result = a+b
    return result
}
console.log(returnsome(2,3));


