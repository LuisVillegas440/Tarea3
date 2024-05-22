/* 9.	Determinar cuánto se  debe pagar por x  cantidad de colas, considerando que si  son menos de 12 colas, el costo por unidad es de $0,25 caso  contrario el precio será  10% menos. */
const read = require('prompt-sync')();
const cantidadColas = parseFloat(read('Ingresar la cantidad de colas: '));
let costoUnidad = 0.25;
let porCientoAplicado = 0;
if(cantidadColas < 12 ){
} else if (cantidadColas > 12 ){
    porCientoAplicado = (10 * costoUnidad) / 100;
}
const precioCola = costoUnidad - porCientoAplicado;
console.log(`El precio de la cola sera de ${precioCola.toFixed(2)}`);
