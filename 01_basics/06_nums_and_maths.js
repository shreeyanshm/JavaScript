const score=400;
const balance=new Number(100)
// console.log(score)
// console.log(balance)

// console.log(balance.toString())

console.log(balance.toFixed(2))

// const otherNum=87.384
// const otherNum=187.384
const otherNum=1187.384
console.log(otherNum.toPrecision(3))

const hund=10000000

console.log(hund.toLocaleString("en-IN"))


// ++++++++++ MATHS ++++++++++++++++++++

/*
various Math functions like ceil, floor, abs etc.
*/

console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.floor(Math.random()*10)+1)


const min=10;
const max=100;

console.log(Math.floor(Math.random()*(max-min+1))+min)