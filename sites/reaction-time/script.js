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
        textOutput.textContent = `Your reaction time: ${reactionTime}ms\nClick to restart`;
    };
}

effectArea.addEventListener("mousedown", registerUserInput);

window.addEventListener("keydown", event => {
    if (event.key === " ") registerUserInput();
});
    