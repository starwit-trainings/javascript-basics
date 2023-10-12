async function sleep(duration) {
    return new Promise(resolve => {
        setTimeout(resolve, duration);
    });
}

console.log("Before sleep");
await sleep(2000);
console.log("After sleep");

// ======================

console.log("Before sleep");
setTimeout(() => {
    console.log("After sleep");
}, 2000);