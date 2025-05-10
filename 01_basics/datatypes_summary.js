//Javascript is a dynamically typed language

//Primitive

//7 types: number, string, boolean, null, undefined, symbol, BigInt

const score=100

const OutsideTemp=null
let email; //let email=undefined

const id= Symbol('123')
const anotherid=Symbol('123')

console.log(id===anotherid)


//Refernce type => Non-primitive

//Arrays, Objects, Functions

const heroes=["Shaktiman","naagraj","chhota bheem"]

let myObj={
    name:"Shreeyansh",
    age:22
}

const myfucntion=function(){
    console.log("Hello world")
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Heap(Non-primitive)   Stack(Primitive)

let myName="shreeyansh"
let myNameTwo=myName;
myNameTwo="Mittal"

console.log(myName)
console.log(myNameTwo)

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo=userOne;

userTwo.email="shree@google.com"

console.log(userOne.email)
console.log(userTwo.email)