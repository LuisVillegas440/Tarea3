/* 7.	Algoritmo que pida dos números y presenta el mayor de los dos siempre y cando el primero sea par y el segundo impar */
const read = require("prompt-sync")();
const numero1 = read("Ingresar el primer numero: ");
const numero2 = read("Ingresar el segundo numero: ");
if (numero1 > numero2 && numero1 % 2 == 0 && numero2 % 2 != 0) {
  console.log("El primer numero es mayor");
} else if (numero1 < numero2 && numero1 % 2 == 0 && numero2 % 2 != 0) {
  console.log("EL segundo numero es mayor");
}
