// SYNTAX
// setTimeout(function, milliseconds)


setTimeout(() => {
    console.log("Hi")
}, 5000)
//-------------------------------------


// SYNTAX
// setInterval(function, milliseconds)
let a = 0;

const interval1 = setInterval(() => {
    a = a+1;
    console.log(a)

    if(a === 5) {
        clearInterval(interval1)
    }
}, 1000)

