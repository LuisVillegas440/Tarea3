/* 19.	Dada una cadena presentar el primer carácter siempre y cuando sea una vocal */
const read = require("prompt-sync")();
const texto = read("Ingresar caracter: ");
const vocales = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
const primerCaracter = texto.charAt(0);

const esVocal = vocales.includes(primerCaracter);
console.log(esVocal);
/* if (
  primerCaracter == "a" ||
  primerCaracter == "e" ||
  primerCaracter == "i" ||
  primerCaracter == "o" ||
  primerCaracter == "u" ||
  primerCaracter == "A" ||
  primerCaracter == "E" ||
  primerCaracter == "I" ||
  primerCaracter == "O" ||
  primerCaracter == "U"
) {
  console.log(`El primer caracter si es una vocal`);
} */
