# Aufgabe 1

## Ziel
- Kennenlernen einiger notwendiger Tools
- Implementieren eines ersten "Hello World!"-Beispiels
- Erste Kontakte mit relevanten Technologien (JS, HTML, DOM)

## Voraussetzungen
- Ein Editor / eine IDE mit Syntaxhighlighting für HTML, JS und CSS (bsp. Visual Studio Code), Autovervollständigung etc. ist nützlich aber nicht unbedingt notwendig
- Git (um dieses Repository zu klonen)
- NPM (für den Dev-Server)
    - http-server aus NPMJS installiert\
      `npm install -g http-server`

## Bearbeitungsschritte
- Vervollständigen sie die `index.html` so, dass ein Button zu sehen ist
- Fügen sie einen `<script>`-Abschnitt (XML-Node) hinzu, in dem sie auf das `click`-Event des Buttons mit der Anzeige einer Meldung reagieren (`alert()`)
- Starten sie zum lokalen Testen den `http-server` aus npmjs:\
  `http-server . -c-1` (`-c-1` verhindert das Cachen der Dateien durch den Browser)

## Hinweise
- Hier ist das erste und letzte Mal, dass wir die `alert()`-Funktion des Browsers benutzen werden. Diese sollte in echten Projekten nur in absoluten Ausnahmefällen zum Einsatz kommen, weil sie sämtliche User-Interaktion unterbricht und sowohl im Styling als auch Verhalten außerhalb der Kontrolle der Website ist.
- Um herauszufinden, welche HTML-Elemente und Attribute sie verwenden müssen / können, machen sie sich mit der Dokumentation vertraut bsp. unter https://developer.mozilla.org/en-US/docs/Web/HTML/Reference

## Challenges
- Gestalten und positionieren Sie den Button per CSS