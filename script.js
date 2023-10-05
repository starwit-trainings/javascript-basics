"use strict";

const helloWorldButton = document.querySelector("#hello-world");
const resetButton = document.querySelector("#reset");

helloWorldButton.addEventListener("click", () => {
    helloWorldButton.disabled = true;
    helloWorldButton.textContent = "clicked";
});

resetButton.addEventListener("click", () => {
    helloWorldButton.disabled = false;
    helloWorldButton.textContent = "Hello World";
});