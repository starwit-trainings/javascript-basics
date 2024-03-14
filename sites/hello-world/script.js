"use strict";

function createTimerFunction(cooldownTime, button) {
    let buttonCooldownActive = false;

    button.addEventListener("click", () => {
        if (buttonCooldownActive) return;
        
        button.disabled = true;
        button.textContent = "clicked";
    });

    return function() {
        if (!button.disabled) return;

        button.disabled = false;
        
        buttonCooldownActive = true;
        let cooldownStartTime = Date.now();

        const cooldownIntervalHandle = setInterval(() => {
            const cooldownCountdown = cooldownTime - (Date.now() - cooldownStartTime);
            button.textContent = `Wait for ${(cooldownCountdown/1000).toFixed(2)}s...`;
        }, 50);
        
        setTimeout(() => {
            buttonCooldownActive = false;
            clearInterval(cooldownIntervalHandle);
            button.textContent = "Hello World";
        }, cooldownTime);
    };
}

const helloWorldButton = document.querySelector("#hello-world");
const resetButton = document.querySelector("#reset");

const timerFunction = createTimerFunction(2000, helloWorldButton);

resetButton.addEventListener("click", timerFunction);
