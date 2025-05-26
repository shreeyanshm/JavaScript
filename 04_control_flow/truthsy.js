// const userEmail="s@mail.com"
// const userEmail=""
const userEmail=[]

if(userEmail){
    console.log(`Got User Email`);
}else{
    console.log(`No Email Found`);
    
}

//falsy

//null, undefined, false, 0, -0, NaN, "", BigInt 0n, 

//truthy
//all that are not falsy
//"0","false"," ",[],{}, function(){}


//checking if the object is empty
const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log(`empty object`);
}


//Nullish Coalescing Operator(??) : null or undefined


let var1;
// var1=5??10
var1=null??10
var1=undefined??20
var1=undefined??30??50

console.log(var1);


//terniary operator 

//condition?true:false