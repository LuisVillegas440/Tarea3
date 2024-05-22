/* 16.Dado un arreglo vacío, añadir 3 nombres y presentar el primer y el ultimo carácter de cada nombre desde el arreglo. */
const read = require("prompt-sync")();

let numeros = [];
let nombre = read("Ingresar nombre: ");
numeros.push(nombre);
nombre = read("Ingresar nombre: ");
numeros.push(nombre);
nombre = read("Ingresar nombre: ");
numeros.push(nombre);
console.log(numeros);
console.log(
  `El primer caracter de ${numeros[0]} es ${numeros[0].charAt(
    0
  )} y el ultimo caracter es ${numeros[0].charAt(numeros[0].length - 1)}`
);
console.log(
  `El primer caracter de ${numeros[1]} es ${numeros[1].charAt(
    0
  )} y el ultimo caracter es ${numeros[1].charAt(numeros[1].length - 1)}`
);
console.log(
  `El primer caracter de ${numeros[2]} es ${numeros[2].charAt(
    0
  )} y el ultimo caracter es ${numeros[2].charAt(numeros[2].length - 1)}`
);

/*  console.log('El primer caracter es:',numeros[0].charAt(0) );
 */
