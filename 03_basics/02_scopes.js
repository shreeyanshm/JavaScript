// var c=300
let a=100
if(true){
    let a=20
    const b=20
    // var c=30
    console.log("Inner: ",a)
}

console.log("Outer: ",a)
// console.log(b)
// console.log(c)

function one(){
    const username="Shreeyansh"

    function two(){
        const website="Youtube"

        console.log(username)
    }

    // console.log(website)         //noe accessible here due to scope

    two()
}

one()

console.log(addOne(5))

function addOne(num){
    return num+1;
}

console.log(addOne(5))


// addTwo(5);      //cannot be called here due to initialization method used

const addTwo=function(num){
    return num+2;
}

addTwo(5);