"use strict";

        const buttons = document.querySelectorAll("button");
        const firstButton = buttons[0];
        const secondButton = buttons[1];
        
        firstButton.addEventListener("click", function() {
            this.disabled = true;
            this.textContent = "deaktiviert";
        });

        secondButton.addEventListener("click", function() {
            firstButton.disabled = false;
            firstButton.textContent = "Hello World";
        });