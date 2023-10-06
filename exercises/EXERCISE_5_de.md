# Aufgabe 5

## Ziel
- Die Entwicklung eines kleinen Spiels "Reaktionstest", das die Reaktionszeit des Nutzers auf einen optischen Effekt misst
- Anwenden des Wissens zu den Themen DOM-Eventverarbeitung und Grid-Layout
- Anwenden von JavaScript "Classes" (ES6) um die Spiellogik von der Anzeigelogik und Eventverarbeitung zu entkoppeln (ähnlich Aufgabe 4)

## Voraussetzungen
- Lösung der Aufgabe 4 (obwohl wir den Inhalt des ersten Projekts "hello-world" hier nicht direkt weiterverwenden werden)

## Bearbeitungsschritte
- Erstellen Sie ein weiteres Unterprojekt namens "reaction-time" mit den bekannten drei Dateien (`index.html` und `style.css` können Sie "hello-world" kopieren) und passen Sie den Header entsprechend an
- Verlinken Sie das neue Projekt aus der Hauptseite
- Erstellen Sie ein neues Grid-Layout im Content-Bereich, in dem Sie die Bedienelemente des Spiels anordnen können
- Implementieren Sie die Logik des Spiels
    - Das Spiel startet im Zustand "Spiel bereit"
    - Nach einem Klick auf "Start" wechselt das Spiel in den Zustand "Spiel läuft"
    - Nach zufälliger Zeit wird der optische Effekt ausgelöst und die Zeit gemessen, die es bis zum Klick des Users auf die Effektfläche braucht
    - Anzeige des Ergebnisses und Wechsel des Spiels in den Zustand "Spiel bereit"

## Hinweise
- Grid-Layouts lassen sich praktisch beliebig schachteln
- Im ersten Schritt benötigen wir nur zwei Elemente
    - Einen Button zum Starten einer neuen Runde
    - Ein Element, in dem wir die Spielanweisungen (wie zb. das Ergebnis) anzeigen können
- Als Signal-/Effektfläche nutzen wir den gesamten Contentbereich

## Challenges
- Reagieren Sie zusätzlich auf Tastendruck (bsp. die Leertaste)
- Entfernen Sie den Button und arbeiten Sie ausschließlich mit Eingaben auf die Effektfläche