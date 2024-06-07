// const user = {

//     name: "vijay",
//     age: 18,
//     address : "pichhore",
//     email : "vijay@google.com",
//     isLoggedIn : false,
//     lastLoginDays : ["monday" , "sunday"]


// }
// console.log(user.name, user.email)

const target= { 1 : "a" , 2 : "b"}

const result= { 3 : "c" , 4 : "d"}

// const obj3 = Object.assign( {}, target,result)
// const obj3 = {...target, ...result}
// console.log(obj3);

// const tinder={}

//     tinder.id = "123abc",
//     tinder.email = "abc@gmail.com",
//     tinder.isLoggedIn = false

//     console.log(Object.keys(tinder));


    const course = {
        coursename:"accha h",
        fees:" 999",
        courseinstructor: "vijay"

    }
    // const { courseinstructor } = course
    // console.log(courseinstructor)

    const { courseinstructor : abc} = course
    console.log(abc)