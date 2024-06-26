//console.log("functionn started");

// function  sayMyName(){

//     console.log("h")
//     console.log("y")
//     console.log("e")
// }
// sayMyName()

//function addTwoNum(num1, num2)
//{
    //  let result = num1 + num2 ;
    //  console.log("hii")
    // return num1 + num2;
    

//}
//const result = addTwoNum(3,15)
//console.log("result: ", result)


// addTwoNum(3,"4")
// addTwoNum(3,null)

// function LoginUserMessage(username = "sam")
// {
//     if(!username){
//         console.log("please enter user name");
//     }

//     return ` ${username} just logged in`
// }


// console.log(LoginUserMessage("vijay"))

function  calculateCartPrice(a,b,...num1){
    return num1
}
//console.log(calculateCartPrice(2, 4  ,5,200, 1000));

// const obj ={
//     name : 'vijay',
//     price : 99
// }

// function handleObject(anyobject){
//     console.log(`username is ${anyobject.name} and price is ${anyobject.price}`)
// }

// //handleObject(obj)

// handleObject({
//     name: "vikash",
//     price : 1000
// })

const  myNewArray= [100,200,300,400]

function returnSecond(getArray){
    return getArray[1]

}
// console.log(returnSecond(myNewArray));
console.log(returnSecond([10,20,30,40]))