let name="Shreeyansh"
let repoCount=50

// console.log(name+repoCount+" Value")

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

const newName= new String("Shreeyansh")

// console.log(newName[0])
// console.log(newName._proto__)

// console.log(newName.length)
// console.log(newName.toUpperCase())
// console.log(newName.charAt(2))
// console.log(newName.indexOf('y'))

// const newString=newName.substring(0,4)
// console.log(newString)

// const anotherString=newName.slice(-8,4)
// console.log(anotherString)

// const stringOne= "   Shreeyansh  "
// console.log(stringOne)
// console.log(stringOne.trim())

const url="https//google.com/shreeyansh%20mittal"
console.log(url.replace('%20','-'))

console.log(url.includes("shreeyansh"))
console.log(url.includes("sundar"))

const str='chai-code-love'
console.log(str.split('-'))
console.log(str[5])