//if statement

const temperature= 41;

if(temperature<=50){
    console.log(`Below 50`)
}else{
    console.log(`Above 50`)
}

console.log(`Executed`)

//<,>,<=,>=,==,!=,===,!==

//!== => strict inequality: not the same value& not the same type

const UserLoggedIn=true
const DebitCard=true 
const LoggedInFromGoogle=true

if(UserLoggedIn && DebitCard){
    console.log(`Allowed to Shop`)
}

if(UserLoggedIn || LoggedInFromGoogle){
    console.log(`User Logged In`)
}