// callback is not a async way, it is an synch way, we have to convert sync callback to async.

console.log("Task started")
function syncCalback(cb){
    console.log("Task running");
    cb();
}

syncCalback(()=>console.log("AKASH"));
// syncCalback(()=>console.log(name1));
console.log("Task end");
const name1 = "AKASH";


// async way
console.log("Task started")
function asyncCallback(cb){
    console.log("Task running");
    setTimeout(cb,10);
}
asyncCallback(()=>console.log(name2));
console.log("Task end");
const name2 = "AKASH";
