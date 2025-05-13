function sayMyName(){
    console.log("Shreeyansh")
    console.log("mittal")
}

// sayMyName()

// function addTwoNum(number1, number2){
//     console.log(number1+number2)
// }
function addTwoNum(number1, number2){
    let result=number1+number2
    return result
}

// addTwoNum(2,6)
// addTwoNum(2,"6")
// addTwoNum(2,null)

const result=addTwoNum(5,6)
console.log(result)

function loginMessage(username){
    if(!username){
        console.log("Please enter username")
        return
    }

    return `${username} just logged in`
}


function loginMessage2(username="shree"){
    if(!username){
        console.log("Please enter username")
        return
    }

    return `${username} just logged in`
}

// console.log(loginMessage("Shree"))
// console.log(loginMessage2("hitesh"))

function CalculateTotal(num1){
    return num1
}

function CalculateTotal2(...num1){
    return num1;
}

function CalculateTotal3(val1, val2,...num1){
    return num1;
}

console.log(CalculateTotal(2))
console.log(CalculateTotal(2,3,5))
console.log(CalculateTotal2(2,3,5))
console.log(CalculateTotal3(2,3,5))

const user={
    username:"Sam",
    total:199
}

function handleObj(anyobject){
    return `The username is ${anyobject.username} and the total is ${anyobject.total}`
}

console.log(handleObj(user))