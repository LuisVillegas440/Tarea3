/* 4.	Diseñar un algoritmo que lea el peso de un hombre en libras y nos devuelva su peso en kilogramos y gramos(nota: una libra equivale a 0.453593 kilogramos) */
const read = require('prompt-sync')();
const pesoLibras = parseFloat(read('Ingresar su peso en libras: '));
const KG = 0.453593;
const pesoKg = pesoLibras * KG;
const pesoGramos = pesoLibras * 453.592;
console.log(`${pesoLibras} libras convertidos en kilogramos es ${pesoKg.toFixed(2)}kg y convertidos en gramos es ${pesoGramos}g`);
