// The purpose of this function is just to spend some time doing something
function thisWillTakeAWhile() {
    for (let i = 0; i < 10000000000; i++) {}
}

// When will this be printed? Why?
setTimeout(() => {
    console.log("Hello World after 1s delay");
}, 1000);

thisWillTakeAWhile();
console.log("After a while");
thisWillTakeAWhile();
