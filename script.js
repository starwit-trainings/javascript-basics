"use strict";

let cooldownTime = 2000;

const helloWorldButton = document.querySelector("#hello-world");
const resetButton = document.querySelector("#reset");

let buttonCooldownActive = false;

helloWorldButton.addEventListener("click", () => {
    if (buttonCooldownActive) return;
    
    helloWorldButton.disabled = true;
    helloWorldButton.textContent = "clicked";
});

resetButton.addEventListener("click", () => {
    if (!helloWorldButton.disabled) return;

    helloWorldButton.disabled = false;
    
    buttonCooldownActive = true;
    let cooldownStartTime = Date.now();

    const cooldownIntervalHandle = setInterval(() => {
        const cooldownCountdown = cooldownTime - (Date.now() - cooldownStartTime);
        helloWorldButton.textContent = `Wait for ${(cooldownCountdown/1000).toFixed(2)}s...`;
    }, 50);
    
    setTimeout(() => {
        buttonCooldownActive = false;
        clearInterval(cooldownIntervalHandle);
        helloWorldButton.textContent = "Hello World";
    }, 2000);

});