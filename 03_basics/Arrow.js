// const user = {

//     username :" vijay",
//     price: 999,

//     welcomeMessage: function(){
//           console.log(`${this. username},welcome to website`)
//         //   console.log(this);
//         }
// }

// user.welcomeMessage()

// user.username = "Captain"
// user.welcomeMessage()
// console.log(this);


// function one(){
//     let username = "Vijay"
//     console.log(this.username);
// }

// one()

// const  one = function(){
//     let username = "Vijay"
//     console.log(this.username);
// }

// one()



/*     Arrow function Concept */
// const one = ()=>{
//     let username = "Vijay"
//     // console.log(this.username);
//     console.log(this);
// }
// one()

// const addTwo = (num1 , num2) => {
//     return num1+num2
// }

// console.log(addTwo(5,6));



//  below code is example of implicit return
// const addTwo = (num1 , num2) => num1+num2

// console.log(addTwo(5,7));



const addTwo = (num1 , num2) => ({username : "vijay"})

console.log(addTwo(5,7));

