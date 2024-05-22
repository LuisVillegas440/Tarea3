/* 2.	Algoritmo que lea un numero entero, obtenga y presente el doble y el triple del número. */  
const read = require('prompt-sync')();
const num = parseInt(read('Ingresar numero: '));
const numDoble = num * 2;
const numTriple = num * 3;
console.log(`El doble de ${num} es:${numDoble} y el triple de ${num} es:${numTriple}`);

