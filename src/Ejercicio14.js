/* 14.	Dado una dirección cualquiera presentar la dirección, el primer carácter, el del medio y el ultimo de dicha dirección. */
const read = require("prompt-sync")();
const direccion = read('Ingresar direccion cualquiera: ');
const caracterMedio = direccion.charAt((direccion.length - 1) / 2);
console.log(caracterMedio);
console.log('El primer caracter es:', direccion.charAt(0));
console.log('El caracter medio es', caracterMedio);
console.log('El ultimo caracter es:',direccion.charAt(direccion.length - 1));
