"use strict";

function CooldownTimer(cooldownTime, progressTick) {
    let startTime;
    let active = false;

    function isActive() {
        return active;
    }

    function getRemaining() {
        return cooldownTime - (Date.now() - startTime);
    }

    function start(progressCallback) {
        return new Promise(resolve => {
            active = true;
            startTime = Date.now();
            let intervalHandle;
    
            setTimeout(() => {
                active = false;
                clearInterval(intervalHandle);
                resolve();
            }, cooldownTime);
    
            intervalHandle = setInterval(() => {
                progressCallback(getRemaining());
            }, progressTick);
        })
    }

    return {
        start,
        isActive,
    }
}

const timer = CooldownTimer(2000, 50);

const helloWorldButton = document.querySelector("#hello-world");
const resetButton = document.querySelector("#reset");

helloWorldButton.addEventListener("click", () => {
    if (timer.isActive()) return;
    
    helloWorldButton.disabled = true;
    helloWorldButton.textContent = "clicked";
});

resetButton.addEventListener("click", async () => {
    if (timer.isActive()) return;

    await timer.start(remaining => {
        helloWorldButton.textContent = `Wait for ${(remaining/1000).toFixed(2)}s...`;
    });
    
    helloWorldButton.textContent = `Hello World`;
    helloWorldButton.disabled = false;
});