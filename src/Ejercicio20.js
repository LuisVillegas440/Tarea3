/* 20.	Dada una cadena presentar el carácter de en medio, siempre y cuando sea un caracte de puntuación: “;” | “:” | “.” | “,” */
const read = require("prompt-sync")();
const texto = read("Ingresar texto: ");
const caracterMedio = texto.charAt((texto.length - 1) / 2);
console.log(caracterMedio);
if (
  (caracterMedio == ";" || caracterMedio == ":" ||
  caracterMedio == "." || caracterMedio == ",")
) {
  console.log(`El caracter de en medio de ${texto} es ${caracterMedio}`);
}
