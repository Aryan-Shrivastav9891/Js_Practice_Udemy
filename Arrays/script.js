const x =[1,2,3,4,5,5, 23,23,23,2,2222]
const y = x[x.length-1]
// console.log(y);
 

//! -- add new element is using .push and unshift


let  app= ["apple" , "banana"]
const newarrays = app.push("keal" , "mango")
// console.log(newarrays);

//! -- add new element is using and unshift
let newa= ["apple" , "banana"]
let newrr = newa.unshift("first index")

//  ! pop and .shift 
//   let remove1st =  [1,"w",4,5,6,7,3]
//   let removepop = remove1st.pop()
// !
  let remove1st =  [1,"w",4,5,6,7,3]
  let removepop = remove1st.shift()

//  ! pop and .length
 let xx = [1,2,3,4,5,6,7]
 let yy= xx.length

//  ! for loop
 
    //  for(let i=0 ; i<5 ; i++){
    // console.log(i);
// }
// ! loop a arrays 
//  let myfrouts = ["apple" , "banana " , "kiwi"]
//  for (let i = 0; i < myfrouts.length; i++) {
//     console.log(myfrouts[i]);      
//  }
//  !  useing break keywords

// let myfroutss = ["apple" , "banana" , "kiwi"]
// for (let i = 0; i < myfroutss.length; i++) {
//    if(myfroutss[i]=== "banana") break
//    console.log(myfroutss[i]);   
// }
// let myfroutss = ["apple" , "banana" , "kiwi"]
// for (let i = 0; i < myfroutss.length; i++) {
//    if(myfroutss[i]=== "banana") continue
//    console.log(myfroutss[i]);   
// }

// ! reverse the loop !
// let xxx = [1,2,3,4,5,6,7,8]
// for (let i =xxx.length; i >= 0; i--) {
//     const element = xxx[i];
//     console.log(element);
    
// }

// ! for each loop 
// const numbers = [1,2,3,4,2,1,2]

// numbers.forEach((element , index , arrays) => {
//     console.log( arrays);
    
// });
// let count= 0
// numbers.forEach(function(ele){
//     count += ele
// })
// console.log(count);
// const numbers = [1,2,3,4,2,1,2]
// let sqr = []
// numbers.forEach(function(ele){
//     sqr.push(ele*ele)
// })
// console.log(sqr);
  
// ! map function
// let numbers = [12,3,4,5,6,7,8,8]
// const newNumebrArray = numbers.map(function( ele , ind , arr){
//     return ele * 10
// })
// console.log(newNumebrArray);

//  ! using map convert arrays to upper cases

    // const test = ["mmm" , "mmmd" , "ewew"]
    // const newtest = test.map((ele)=>{
    //     return( 
    //     ele.charAt(1).toUpperCase() + ele.slice(1 ) )
        
    // })
    // console.log(newtest);

    // ! filter arrays
    // const oldArr = [1,22,222,3,4,5,3,2,2]
    // const newarr = oldArr.filter(function(ele){
    //     return ele%2 === 0
    // })
    // console.log(newarr);
    
    // const gender = ["male" , "femail"]
    // const returnn = gender.filter(function(gen){
    //     return gen === "male"
    // })
    // console.log(returnn);
    // ! falsy value remove in this arrays
    // const mixedarr = [0 ,1, "aplle" , "" , null , "banana"]
    // const truthyvalue = mixedarr.filter(function(ele){
    //     return !!ele
    // })
    // console.log(truthyvalue);
    
    // ! reduce method 

    const cart = [1,1.4,2,3,4,5,6]
    const newtotal = cart.reduce(function(acc , ele , ){
        // console.log(acc); // acc store initial value
        return acc + ele
    }, 0 )
    console.log(newtotal);
    