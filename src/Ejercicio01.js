/* 1.	Algoritmo que transforme de grados Celsius a Fahrenheit */
const read = require('prompt-sync')();
//Pedimos los grados en Celsius
const gradosC = read('Ingresar grados en Celsius: ');
//Hacemos la conversion de grados Celsius a fahrenheit
const gradosFahrenheit = (gradosC * 9/5) + 32;
console.log(`${gradosC} grados Celsius convertidos en grados fahrenheit es:${gradosFahrenheit}`);