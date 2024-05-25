/* 8.	Leer un carácter y deducir si está o no comprendido entre las letras a y z ambas inclusive y sino verificar si es un signo de puntuacion ", . ; :"
y si no presentar solo el carácter.
 */
const read = require("prompt-sync")();
const caracter = read("Ingresar caracter: ");
const codigoCaracter = caracter.charCodeAt();
const signosPuntuacion = [44, 46, 59, 58]; // ", . ; :"

if (signosPuntuacion.includes(codigoCaracter)) {
  console.log("Es un signo de puntuación");
} else if (
  (codigoCaracter >= 65 && codigoCaracter <= 90) ||
  (codigoCaracter >= 97 && codigoCaracter <= 122)
) {
  console.log("Es un caracter");
} else if (codigoCaracter >= 48 && codigoCaracter <= 57) {
  console.log("Es un  numero");
}
// A->65
// Z->90
// a->97
// z->122
// ,->44
// .->46
// ;->59
// ;->58
// 0->48
// 9->57