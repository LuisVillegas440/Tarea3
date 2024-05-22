/* 21.	Dado dos caracteres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo */
const read = require('prompt-sync')();
const caracter1 = read('Ingresar primer caracter: ');
const caracter2 = read('Ingresar segundo caracter: ');
if (caracter1 == caracter2){
    console.log('Son iguales')
} else if (caracter1 < caracter2){
    console.log('El primer caracter es menor que el segundo');
} else {
    console.log('El primer caracter es mayor que el segundo');
}