const myObj={
    js:"Javascript",
    cpp:"C++",
    rb:"ruby",
    sft:"swift by apple"
}

for (const key in myObj) {
    // console.log(`Key is ${key} and the value is ${myObj[key]}`)
}

const language=["java",'js','cpp','python']

for (const key in language) {       //not suitable for array
    // console.log(key);
}

// for (const key in map) {        //map is not iterable like this
// }

language.forEach(function(item){
    // console.log(item);
})

language.forEach((item)=>{
    // console.log(item);
    
})

function printMe(item){
    // console.log(item);
}

language.forEach(printMe)

language.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})

const myCode=[
    {
        languageName:"java",
        diff:"medium"
    },
    {
        languageName:"python",
        diff:"medium"
    },
    {
        languageName:"ruby",
        diff:"medium"
    }
]

myCode.forEach((item)=>{
    console.log(item.languageName);
})

const myNums=[1,2,3,4,5,6,7,8,9,10]

// const nums=myNums.filter((num) => num>4)
let nums=myNums.filter((num) => {
    return num>4
})
console.log(nums);

nums=myNums.map((num)=>num+10)
console.log(nums);

nums=myNums
        .map((i)=>i*10)
        .map((i)=>i+1)
        .filter((i)=>i>=40);

console.log(nums);
        
// const myTotal=myNums.reduce(function(acc,curr){
//     console.log(`acc:${acc} & curr:${curr}`);
//     return acc+curr
    
// },0)

const myTot=myNums.reduce((acc,curr)=>acc+curr,0)

console.log(myTot);
