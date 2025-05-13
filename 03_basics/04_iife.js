//IMMEDIATELY INVOKED FUNCTION EXPRESSION

(function chai(){
    console.log(`DB Connected`)
})();   //semi colon is important

((name) => {
    console.log(`DB Connected two ${name}`)
})('sam')

// iife: function that is immediately executed(naive)
// iife: to avoid global scope pollution
