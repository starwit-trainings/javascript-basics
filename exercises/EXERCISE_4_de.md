# Aufgabe 4

## Ziel
- Refactoring der Countdown-Funktionalität, so dass die eigentliche Logik weitestgehend getrennt von den Timer-Interna ist

## Voraussetzungen
- Lösung von Aufgabe 3
- Ein wenig Wissen um das Konzept der Closure in JavaScript

## Bearbeitungsschritte
- Erstellen Sie eine Funktion für die Timer-Funktionalität und nutzen sie dabei die Eigenschaften der Closure

## Hinweise
- Die Closure nutzen wir hier als eine Art Objekt, welche uns die Möglichkeit verschafft, innerhalb der Funktion einen Zustand zu behalten, auf den wir mit den zurückgegebenen Funktionen oder Attributen zugreifen können
- Alle Variablen, die innerhalb einer Funktion definiert sind, sind auch nach Ablauf der Funktion für alle darin definierten Funktionen verfügbar. Der "externe" Zugriff darauf lässt sich realisieren, indem die inneren Funktionen in einem Objekt zurückgegeben werden.
- Dokumentation u.a. hier: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

## Challenges
- Benutzen Sie für den Timer Promises, um den Code noch lesbarer zu machen, ggf. sogar mit `async` und `await`
