"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-button");
    const effectArea = document.getElementById("effect-area");
    const gameStatus = document.getElementById("game-status");
    const attemptsList = document.getElementById("attempts-list"); 
    const averageDisplay = document.getElementById("average-display"); 
    const medianDisplay = document.getElementById("median-display");

    let gameRunning = false;
    let startTime;
    let attempts = []; // Array zum Speichern der Versuche

    document.body.addEventListener("keydown", function (event) {
        if (!gameRunning) {
            startButton.textContent = "Game Running";
            startButton.style.display = "none";
            effectArea.style.display = "block";
            gameStatus.textContent = "Game Status: Running"; // Aktualisierung des Spielstatus
            averageDisplay.style.display = "none"; // Durchschnittsanzeige ausblenden
            attemptsList.style.display = "none"; // Versuchsliste ausblenden
            medianDisplay.style.display = "none"; // Mediananzeige ausblenden
            gameRunning = true;

            // Zufällige Zeit bis zum Effekt
            const randomTime = Math.random() * 3000 + 1000; // zwischen 1 und 4 Sekunden
            setTimeout(function () {
                startTime = new Date().getTime();
                document.body.style.backgroundColor = "gold";
                setTimeout(function () {
                    document.body.style.backgroundColor = "white";
                }, 200);
                setTimeout(function () {
                    effectArea.style.backgroundColor = "red";
                }, 100);
            }, randomTime);
        } else {
            const endTime = new Date().getTime();
            const reactionTime = endTime - startTime;
            attempts.unshift(reactionTime); // Fügt die Reaktionszeit am Anfang der Versuchsliste hinzu
            displayAttempts(); // Zeigt die Versuche an
            displayAverage(); // Zeigt den Durchschnitt an
            displayMedian(); // Zeigt den Median
            alert("Your reaction time: " + reactionTime + " milliseconds");
            resetGame();
        }
    });

    function resetGame() {
        startButton.textContent = "Press any Key to Start";
        startButton.style.display = "block";
        effectArea.style.display = "none";
        gameStatus.textContent = "Game Status: Not Started";
        gameRunning = false;
        effectArea.style.backgroundColor = "black";
        averageDisplay.style.display = "block";
        attemptsList.style.display = "block";
        medianDisplay.style.display = "block";
        displayAverage();
    }

    // Anzeigen der Versuche
    function displayAttempts() {
        attemptsList.innerHTML = ""; // Löscht die aktuelle Versuchsliste
        attempts.forEach((attempt, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `Attemp #${attempts.length - index}: ${attempt} Milliseconds`;
            attemptsList.appendChild(listItem);
        });
    }

// Berechnen und Anzeigen des Durchschnitts
function displayAverage() {
    if (!gameRunning) { // Überprüfen, ob das Spiel läuft
        const sum = attempts.reduce((a, b) => a + b, 0);
        const average = sum / attempts.length;
        averageDisplay.textContent = `Average Response Time: ${average} Milliseconds`;
    } else {
        averageDisplay.textContent = ""; // Textinhalt leeren wenn das Spiel läuft
    }
}


    // Median berechnen
    function displayMedian() {
        const sortedAttempts = [...attempts].sort((a, b) => a - b); // Kopieren und sortieren der Versuche
        let median;
        if (sortedAttempts.length % 2 === 0) {
            median = (sortedAttempts[sortedAttempts.length / 2 - 1] + sortedAttempts[sortedAttempts.length / 2]) / 2; // Wenn die Anzahl der Versuche gerade ist, ist der Median der Durchschnitt der beiden mittleren Elemente
        } else {          
            median = sortedAttempts[(sortedAttempts.length - 1) / 2]; // Wenn die Anzahl der Versuche ungerade ist, ist der Median das mittlere Element
        }
    
        medianDisplay.textContent = `Median: ${median} Milliseconds`;
    }



});
