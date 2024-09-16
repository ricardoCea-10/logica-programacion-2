// Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
// const prompt = require('prompt-sync')(); // ---> Descomentar linea solo para usar con Node.js 
console.log("BIENVENIDO AL PROGRAMA CONVERSOR DE TEMPERATURAS"); 
console.log("");
do {
    input = prompt("A continuación, por favor ingresa la temperatura en grados Celsius: ");
    tempCelsius = parseFloat(input);
    console.log("")

    // Solo se puede ingresar una temperatura superior a -273.15°. Además, debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.
    if (isNaN(tempCelsius)) {
        console.log("Dato ingresado no válido. Por favor, ingresa un número.");
    } else if (tempCelsius < -273.15) {
        console.log("Temperatura fuera de rango. La temperatura no puede ser menor a -273.15°C.");
    }
} while (isNaN(tempCelsius) || tempCelsius < -273.15);
console.log("");

// Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
let tempFahrenheit = (tempCelsius*(9/5))+32;
let tempKelvin = tempCelsius + 273.15;

// Debe imprimir ambos resultados por consola o por el DOM.
console.log("La temperatura en grados Fahrenheit es: " + tempFahrenheit);
console.log("La temperatura en grados Kelvin es: " + tempKelvin);
console.log("");
console.log("PROGRAMA TERMINADO.");

// También mostramos los resultados en el DOM, es decir, en la página web
document.getElementById("resultado").innerHTML = 
    `La temperatura ingresada por el usuario es: ${tempCelsius}° Celsius<br>
    La temperatura en grados Fahrenheit es: ${tempFahrenheit}°<br>
    La temperatura en grados Kelvin es: ${tempKelvin}°`;
