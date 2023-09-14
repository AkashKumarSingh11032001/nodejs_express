// measure time for executing a single function.

// const sum = (a,b) => {
//     console.log(`Sum of ${a} and ${b} is: ${a+b}`);
// }

// const multiply = (a,b) => {
//     console.log(`Multiply of ${a} and ${b} is: ${a*b}`);
// }

// const measureTime = () => {
//     console.time("sum()");
//     sum(2,3);
//     console.timeEnd('sum()')
//     console.time("multiply()");
//     multiply(2,3);
//     console.timeEnd('multiply()')
// }

// measureTime()

// Progress bar -- CLI downloading bar
const ProgressBar = require("progress");
const bar = new ProgressBar("downloading [:bar] :rate/bps :precent :etas",{
    total:20
})

const timer = setInterval(()=>{
    bar.tick();
    if(bar.complete){
        clearInterval(timer);
    }
},100)


