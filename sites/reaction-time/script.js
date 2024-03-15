"use strict";


document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-button");
    const effectArea = document.getElementById("effect-area");
    const gameStatus = document.getElementById("game-status"); // Verweis auf das neue Textfeld

    let gameRunning = false;
    let startTime;

    startButton.addEventListener("click", function () {
       
        if (!gameRunning) {
            startButton.textContent = "Game Running";
            startButton.style.display = "none";
            effectArea.style.display = "block";
            gameStatus.textContent = "Game Status: Running"; // Aktualisierung des Spielstatus
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
                }
            });

    effectArea.addEventListener("click", function () {
        if (gameRunning) {
            const endTime = new Date().getTime();
            const reactionTime = endTime - startTime;
            alert("Your reaction time: " + reactionTime + " milliseconds");
            resetGame();
        }
    });

    function resetGame() {
        startButton.textContent = "Start Game";
        startButton.style.display = "block";
        effectArea.style.display = "none";
        gameStatus.textContent = "Game Status: Not Started";
        gameRunning = false;
        effectArea.style.backgroundColor = "black";
    }
});