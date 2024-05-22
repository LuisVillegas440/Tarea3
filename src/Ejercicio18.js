/* 18.	Dada una cadena presentar el ultimo carácter siempre y cuando sea una letra */
const read = require("prompt-sync")();
const texto = read("Ingresar cadena: ");
const ultimoCaracter = texto[texto.length - 1];
if (isNaN(ultimoCaracter)) {
  console.log(ultimoCaracter);
}else{
    console.log('No es una letra');
}
