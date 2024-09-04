const accountId=144553
let accountEmail="shreeyansh@google.com"
var accountPass="12345"
accountCity="Jaipur"   //Do not use this method
let accountState;       //this will give output as undefined

// accountId=2 //not allowed
accountEmail="hc@hc.com"
accountPass="23415"

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.log(accountId)
console.log(accountEmail)
console.log(accountPass)

console.table([accountId,accountEmail,accountPass,accountCity,accountState])