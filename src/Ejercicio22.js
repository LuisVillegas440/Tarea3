/* 22.	Dado dos nombres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo */
const read = require('prompt-sync')();
const nombre1 = read('Ingresar primer nombre: ');
const nombre2 = read('Ingresar segundo nombre: ');
if (nombre1 < nombre2){
    console.log('El primer nombre es menor que el segundo');
} else {
    console.log('El primer nombre es mayor que el segundo');
}