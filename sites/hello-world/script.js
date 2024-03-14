"use strict";

function wait(duration) {
    return new Promise(resolve => {
        setTimeout(resolve, duration);
    });
}

async function handleButtonClick(button, cooldownTime) {
    button.disabled = true;
    button.textContent = "clicked";

    await wait(cooldownTime);

    button.disabled = false;
    button.textContent = "Hello World";
}

const helloWorldButton = document.querySelector("#hello-world");
const resetButton = document.querySelector("#reset");

helloWorldButton.addEventListener("click", async () => {
    await handleButtonClick(helloWorldButton, 2000);
});

resetButton.addEventListener("click", async () => {
    await handleButtonClick(helloWorldButton, 0); // keine Abklingzeit für den Reset-Button
});
