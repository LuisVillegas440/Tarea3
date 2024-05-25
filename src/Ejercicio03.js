/* 3.	Diseñar un Algoritmo que lea 4 variables y calcule e imprima su producto, su suma y su media aritmética. */
const read = require('prompt-sync')();
function arreglosNumeros() {
    let numeros = [];
let valor = parseFloat(read('Ingresar numero: '));
numeros.push(valor);
valor = parseFloat(read('Ingresar numero: '));
numeros.push(valor);
valor = parseFloat(read('Ingresar numero: '));
numeros.push(valor);
valor = parseFloat(read('Ingresar numero: '));
numeros.push(valor);
console.log(numeros);
const producto = numeros[0] * numeros[1] * numeros[2] * [3];
const sumaNumeros = numeros[0] + numeros[1] + numeros[2] + numeros[3];
const mediaAritmetica = sumaNumeros / 4;
console.log(`El producto de estos numero es:${producto}`);
console.log(`La suma de los numeros es:${sumaNumeros}`);
console.log(`Su media aritmetica es:${mediaAritmetica}`);
}
arreglosNumeros()