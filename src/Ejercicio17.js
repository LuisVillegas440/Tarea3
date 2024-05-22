/* 17.	Dada una cadena presentar el primer carácter siempre y cuando sea un digito */
const read = require('prompt-sync')();
const texto = read('Ingresar caracter: ');
const primerCaracter = texto.charAt(0);
if(!isNaN(primerCaracter)){
    console.log(primerCaracter);
} else {
    console.log('El primer caracter no es un numero');
}
