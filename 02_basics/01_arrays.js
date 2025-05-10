//arrays

//resizeable
//mix of datatypes
//array copy operations make shallow copies and not deep copies


const myArr=[1,2,3,5,6,7,8]
const Heroes=["shaktiman","RAONE"]

const myArr2=new Array(1,2,3,5,4)
console.log(myArr[2])

// myArr.push(4)
// myArr.push(6)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(0)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(3))
// console.log(myArr.indexOf(3))
// console.log(myArr.indexOf(13))

const newArr=myArr.join()
// console.log(myArr)
// console.log(newArr)

//slice and splice
console.log("A ",myArr);
const myn1=myArr.slice(1,3);
console.log("B ",myArr)
console.log(myn1)

const myn2=myArr.splice(1,3)
console.log("C ",myArr)
console.log(myn2)
