# Aufgabe 2

## Ziel
- Einstieg in die (event-basierte) Manipulation von HTML-Elementen

## Voraussetzungen
- Lösung von Aufgabe 1:
    - Ein funktionierendes Entwicklungssetup
    - Eine simple aber vollständige HTML-Datei

## Bearbeitungsschritte
- Legen Sie eine externe `script.js` an und verschieben Sie sämtlichen Javascript-Code in diese
- Fügen Sie einen zweiten Button hinzu
- Wenn auf den ersten Button geklickt wird, soll dieser deaktiviert werden und die Beschriftung entsprechend geändert werden
- Der zweite Button ("Reset") versetzt den ersten Button wieder in seinen Ausgangszustand

## Hinweise
- Eine Übersicht, welche Attribute ein HTML-Button unterstützt, finden Sie hier (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) oder natürlich im Rahmen der Autocomplete-Funktion ihrer IDE
- Sie werden an die beiden Buttons verschiedene Event-Listener hängen müssen. Dafür müssen diese in der Document-Query unterscheidbar sein

## Challenges
- Sorgen Sie dafür, dass sich der erste Button erst nach Ablauf einer festen Zeit (z.B. 2 Sekunden) wieder aktivieren lässt ("cooldown")
- Zeigen Sie den Cooldown-Countdown an
- ...