/* 15.	Almacenar 5 valores aleatorios en un arreglo e imprimir el primero valor si es par positivo y el ultimo si es impar negativo. */
function generaNumeroAleatorio() {
  return Math.floor(Math.random() * 20 - 10);
}
const valores = [
  generaNumeroAleatorio(),
  generaNumeroAleatorio(),
  generaNumeroAleatorio(),
  generaNumeroAleatorio(),
  generaNumeroAleatorio(),
];
if (valores[0] % 2 ==0 && valores[0] >= 0){
    console.log('El primer valor si es par positivo');
} else if (valores[4] % 2 != 0 && valores[4] <= 0){
    console.log('El ultimo si es impar negativo');
}
console.log(valores);
