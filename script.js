"use strict";

    const buttons = document.querySelectorAll("button");
    const firstButton = buttons[0];
    const secondButton = buttons[1];
    let isDisabled = false;
    let countdownTimer;

    // Funktion, um den Countdown anzuzeigen
    function displayCountdown(seconds) {
        firstButton.textContent = `Button deaktiviert (${seconds}s)`;
    }

    // Event-Listener für den Klick auf den ersten Button hinzufügen
    firstButton.addEventListener("click", function() {
        if (!isDisabled) {
            // Button deaktivieren
            this.disabled = true;
            // Beschriftung ändern
            this.textContent = "Button deaktiviert";
            isDisabled = true;

            // Countdown starten
            let secondsLeft = 2;
            displayCountdown(secondsLeft);
            countdownTimer = setInterval(function() {
                secondsLeft--;
                if (secondsLeft > 0) {
                    displayCountdown(secondsLeft);
                } else {
                    clearInterval(countdownTimer);
                }
            }, 1000);
        }
    });

    // Event-Listener für den Klick auf den zweiten Button hinzufügen
    secondButton.addEventListener("click", function() {

        firstButton.disabled = false;
        firstButton.textContent = "Hello World";
        isDisabled = false;
        clearInterval(countdownTimer);
    });