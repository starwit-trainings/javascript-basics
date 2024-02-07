// In which order will the log outputs appear and why?
// Try rearranging the lines and see what happens.

function printAfterDelay(delay) {
    setTimeout(() => {
        console.log(`Hello World after ${delay}s delay`);
    }, delay * 1000);
}

printAfterDelay(2);

printAfterDelay(1);

printAfterDelay(0);

console.log("Hello World!");