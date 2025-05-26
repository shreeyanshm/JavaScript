// for (const element of object) {
    
// }

const numbers=[1,2,3,4,5]

for (const num of numbers) {
    // console.log(num);
}

const greeting="hello User"
for (const greet of greeting) {
    // console.log(greet);
}

//MAP

//store key value pairs

const map=new Map()

map.set("IN","India")
map.set("GN","Germany")
map.set("FR","France")

for (const [key,value] of map) {
    console.log(key+":-"+value);
}

const myOj={
    game1:"NFS",
    game2:"GTA6"
}

for (const [key,value] of myOj) {   //not iterable
    console.log(key+value);
    
}

