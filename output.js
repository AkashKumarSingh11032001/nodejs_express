// measure time for executing a single function.
const sum = (a,b) => {
    console.log(`Sum of ${a} and ${b} is: ${a+b}`);
}

const multiply = (a,b) => {
    console.log(`Multiply of ${a} and ${b} is: ${a*b}`);
}

const measureTime = () => {
    console.time("sum()");
    sum(2,3);
    console.timeEnd('sum()')
    console.time("multiply()");
    multiply(2,3);
    console.timeEnd('multiply()')
}

measureTime()

