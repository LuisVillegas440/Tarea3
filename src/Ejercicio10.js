/* 10.	El almacén “AlgoritmoX” tiene una promoción: a todos los trajes que tienen un precio superior a 200, se les aplicará un descuento del 10% y al resto tendrán un descuento de solo $10 dólares. Presentar el valor de cada traje con su respectivo valor, descuento y pago considerando el iva del 15%. */
const read = require('prompt-sync')();
const precioTraje = read('Ingresar precio del traje: ');
let descuento = 0;
if (precioTraje > 200){
    descuento = (precioTraje * 10) / 100;
} else {
    descuento = 10;
} 
const descuentoAplicado = precioTraje - descuento;
const ivaAplicado = (descuentoAplicado * 15) / 100;
const pagoFinal = descuentoAplicado + ivaAplicado;
console.log(pagoFinal);

