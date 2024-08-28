
// Expresión if else

let miNota = 95

if (miNota >= 80) {
    console.log("Felicitaciones, aprobaste")
} else {
    console.log("Lastimosamente no aprobaste")
}

let miLugar = "Primero";

if (miLugar == "Primero") {
    console.log("Oro")
} else if (miLugar == "Segundo") {
    console.log("Plata")
} else if (miLugar == "Tercero") {
    console.log("Bronce")
} else {
    console.log("Sin medalla")
}

// Declaración switch

switch(miLugar) {
    case "Primero":
        console.log("Oro");
        break;
    case "Segundo":
        console.log("Plata");
        break;
    case "Tercero":
        console.log("Bronce");
        break;
    default:
        console.log("Sin medalla");
}

// Expresión de manejo de excepciones
// Declaración try catch

try {
    openFile(); // Esto arroja un error
} catch (e) { // Al ocurrir un error, manejarlo
    console.log(e)
} finally {
    console.log("Salida del try-catch"); // Esto siempre se ejecuta
}