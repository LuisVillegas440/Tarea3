/* 23.	Dado una cadena indicar cuantos elementos tiene, sin usar ciclos  */
const read = require('prompt-sync')();
const texto = read('Ingresar texto: ');
const longitud = texto.length;
console.log(longitud);
