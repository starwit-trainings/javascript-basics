const siteElements = document.querySelectorAll("html, body, div, button, a");

for (const elem of siteElements) {
    elem.addEventListener("click", event => {
        console.log(`Bubble: ${elem.nodeName} id=${elem.id} target=${event.target.id} currentTarget=${event.currentTarget.id}`);
        console.log(event);
    });
}

const span = document.querySelector("#tooltip");

let mouseEventCount = 0;

document.querySelector("html").addEventListener("mousemove", event => {
    // span.style.top = `${event.clientY}px`;
    // span.style.left = `${event.clientX}px`;
    mouseEventCount++;
    span.textContent = `x=${event.clientX} y=${event.clientY} eventCount=${mouseEventCount}`;
});