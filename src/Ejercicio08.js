/* 8.	Leer un carácter y deducir si está o no comprendido entre las letras a y z ambas inclusive y sino verificar si es un signo de puntuacion ", . ; :"
y si no presentar solo el carácter.
 */
const read = require('prompt-sync')();
const caracter = read('Ingresar caracter: ');
if (caracter == ',' || caracter == '.' || caracter == ';' || caracter == ':'){
    console.log('Es un signo de puntuacion')
} else {
    console.log('Es un caracter');
}
