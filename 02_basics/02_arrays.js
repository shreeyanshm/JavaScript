const marvelHeros=['ironman','spiderman','captain america']
const dcHeros=['superman','flash','batman']

// console.log(marvelHeros)
// console.log(dcHeros)
// marvelHeros.push(dcHeros)
// console.log(marvelHeros)

// const allHeros=marvelHeros.concat(dcHeros)
// console.log(allHeros)

// const allNewHeros=[...marvelHeros,...dcHeros]
// console.log(allNewHeros)

const anotherArray=[1,2,3,4,[5,6,7],7,[4,5,[6,7]]]
const real_another_array=anotherArray.flat(Infinity)
// console.log(anotherArray)
// console.log(real_another_array)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Shreeyansh"))
console.log(Array.from({name:"shreeyanssh"}))   //interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))