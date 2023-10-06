# Aufgabe 3

## Ziel
- Kennenlernen des CSS-Grid-Layout (das werden wir für weitere Aufgaben benötigen)
- Das Projekt für mehrere Unterprojekte umstrukturieren (eine index.html als Übersicht mit Links auf die Unterprojekte)

## Voraussetzungen
- Lösung von Aufgabe 2:
    - Ein funktionierendes Entwicklungssetup
    - Eine simple aber vollständige HTML-Datei
    - Ein wenig Javascript-Code, der die Interaktion der Buttons steuert

## Bearbeitungsschritte
- Verschieben Sie `index.html` und `script.js` in einen Ordner `sites/hello-world`
- Erzeugen sie eine neue `index.html` auf der obersten Ebene und fügen sie einen Link ein, der auf die neue Unterseite verweist
- Fügen sie dem "hello-world"-Projekt eine `style.css` hinzu und verlinken sie diese in der HTML-Datei
- Definieren Sie per CSS ein Grid-Layout, das sich auf den gesamten Viewport streckt und zwei Zeilen beinhaltet (von oben: Header - 80px, Content - restlicher Platz)
- Zentrieren sie in beiden Zeilen den Inhalt horizontal, fügen sie "Hello World" als Überschrift `h1` in den Header ein und weisen sie die Buttons aus Aufgabe 2 der zweiten Zeile (content) zu

## Hinweise
- Hier müssen Sie keine Änderungen am Javascript-Code durchführen. Das Layout wird rein deklarativ per CSS angepasst.
- Speziell zum CSS-Grid-Layout gibt es eine sehr gute Übersicht hier: https://css-tricks.com/snippets/css/complete-guide-grid/
- Um das Layout etwas berechenbarer zu machen, können sie folgenden CSS-Abschnitt verwenden:
    ```css
    body {
        font-family: sans-serif;
        height: 100vh;
        margin: 0;
        box-sizing: border-box;
    }
    ```