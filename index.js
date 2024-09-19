// Greift auf das erste (und in der Regel einzige) <body>-Element der Webseite zu
const body = document.getElementsByTagName("body")[0]

// Funktion zur Änderung der Hintergrundfarbe des <body>-Elements
// Der Parameter 'name' erwartet einen Farbwert (z.B. "red", "#FF0000", "rgb(255, 0, 0)")
function setColor(name) {
    // Setzt die Hintergrundfarbe des <body>-Elements auf den übergebenen Farbwert
    body.style.backgroundColor = name;
}

// Funktion, die eine zufällige Farbe generiert und als Hintergrundfarbe des <body>-Elements setzt
function randomColor() {
    // Generiert eine zufällige Zahl zwischen 0 und 255 für den Rotanteil
    const red = Math.round(Math.random() * 255)
    
    // Generiert eine zufällige Zahl zwischen 0 und 255 für den Grünanteil
    const green = Math.round(Math.random() * 255)
    
    // Generiert eine zufällige Zahl zwischen 0 und 255 für den Blauanteil
    const blue = Math.round(Math.random() * 255)
    
    // Optional: Der gelbe Farbanteil wird hier erzeugt, aber nicht verwendet
    const yellow = Math.round(Math.random() * 255)
    
    // Erzeugt eine Farbzeichenkette im RGB-Format mit den generierten Rot-, Grün- und Blauwerten
    const color = `rgb(${red}, ${green}, ${blue})`
    
    // Setzt die generierte Zufallsfarbe als Hintergrundfarbe des <body>-Elements
    body.style.backgroundColor = color;
}
