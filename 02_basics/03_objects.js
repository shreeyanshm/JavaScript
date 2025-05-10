//singleton
//Object.create


const mySym=Symbol('key1')
const jUser={
    name:"Shreeyansh",
    email:"shreeyansh@google.com",
    "full name":"shreeyansh mittal",
    age:18,
    [mySym]:"mykey1",
    location:"Delhi",
    IsLoggedIn:false,
    LastLoggedIn:['Monday','saturday']
}

// console.log(jUser.email)
// console.log(jUser["email"])
// console.log(jUser["full name"])
// console.log(jUser[mySym])

jUser.email="shreeyansh@chatgopt.com"
// Object.freeze(jUser)
// jUser.email="shreeyansh@microsoft.com"
// console.log(jUser)


jUser.greeting=function(){
    console.log("Hello JS user")
}

jUser.greetingTwo=function(){
    console.log(`Hello JS User, ${this.name}`)
}

jUser.greeting()
jUser.greetingTwo()
