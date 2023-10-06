"use strict";

class Game {
    #state;
    #triggerCallback;
    #triggerTime;
    #timeoutHandle;

    constructor(triggerCallback) {
        this.#setReady();
        this.#triggerCallback = triggerCallback;
    }
    
    start() {
        clearTimeout(this.#timeoutHandle);
        
        this.#setPlaying();
        this.#timeoutHandle = setTimeout(() => {
            this.#triggerTime = Date.now();
            this.#setTriggered();
            this.#triggerCallback();        
        }, Math.random() * 5000 + 1000);
    }

    userClicked() {
        if (!this.isTriggered()) return 9999;

        this.#setReady();
        return Date.now() - this.#triggerTime;
    }
    
    isPlaying() {
        return this.#state === "playing";
    }
    
    isReady() {
        return this.#state === "ready";
    }

    isTriggered() {
        return this.#state === "triggered";
    }

    #setPlaying() {
        this.#state = "playing";
    }
    
    #setReady() {
        this.#state = "ready";
    }

    #setTriggered() {
        this.#state = "triggered";
    }
}

const effectArea = document.querySelector("#effect-area");
const textOutput = document.querySelector("#text-output");
const resultList = document.querySelector("#results");

const reactionTimeHistory = [];

const game = new Game(() => {
    effectArea.style.backgroundColor = "grey";
    setTimeout(() => effectArea.style.backgroundColor = "white", 100);
});

function registerUserInput() {
    if (game.isReady()) {
        textOutput.textContent = "Click the white area, when it flashes (or hit SPACE)";
        game.start();
    } else if (game.isTriggered()) {
        const reactionTime = game.userClicked();
        textOutput.innerHTML = `Your reaction time: <b>${reactionTime}ms</b><br>Click to restart`;
        reactionTimeHistory.push(reactionTime);
        updateHistory();
    };
}

function updateHistory() {
    const average = reactionTimeHistory.reduce((a,b) => a+b) / reactionTimeHistory.length;
    const avgSpan = document.createElement("span");
    avgSpan.textContent = `Average (n=${reactionTimeHistory.length}): ${average.toFixed()}ms`
    avgSpan.className = "history-item";

    resultList.replaceChildren(
        avgSpan,
        ...reactionTimeHistory.map((time, idx) => {
            const elem = document.createElement("span");
            elem.textContent = `${idx+1}. ${time}ms`;
            elem.className = "history-item";
            return elem;
    }).reverse());
}

effectArea.addEventListener("mousedown", registerUserInput);

window.addEventListener("keydown", event => {
    if (event.key === " ") registerUserInput();
});
