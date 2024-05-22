/* 13.	Dado 5 nombres almacenarlo en un arreglo y luego presentar cada nombre del arreglo desde el ultimo al primero sin usar ciclos. */
const read = require("prompt-sync")();
function nombres() {
  numeros = [];
  let nombre = read("Ingresar nombre: ");
  numeros.push(nombre);
  nombre = read("Ingresar nombre: ");
  numeros.push(nombre);
  nombre = read("Ingresar nombre: ");
  numeros.push(nombre);
  nombre = read("Ingresar nombre: ");
  numeros.push(nombre);
  nombre = read("Ingresar nombre: ");
  numeros.push(nombre); 
  
  console.log(numeros);
  const reversed = numeros.reverse();
  console.log(reversed);
}
nombres();
