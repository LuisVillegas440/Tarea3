/* 6.	Un empleado trabaja 40 horas en jornada normal en la semana a razón $5 la hora. Si trabaja más de 40 horas, estas serán considerados horas de sobretiempo que se pagan al doble de la hora de la jornada normal. El porcentaje del seguro social(iess) es del 10% del ingreso total. Se desea saber cuál es el valor del sueldo, sobretiempo, ingreso total, seguro social y el neto a recibir. */
const read = require('prompt-sync')();
const jornadaNormal = 40;
const pagoDeHora = 5;
const porcentajeIess = 0.10;
const horasTrabajadas = parseFloat(read('Cuantas hora ha trabajado esta semana?: '));
const horasExtras = horasTrabajadas - jornadaNormal;
const sueldoNormal = jornadaNormal * pagoDeHora;
let pagoHorasExtra = 0;
if(horasTrabajadas > jornadaNormal){
    pagoHorasExtra = horasExtras * (2 * pagoDeHora)
}
const sueldoTotal = sueldoNormal + pagoHorasExtra;
const seguroSocial = sueldoTotal * porcentajeIess;
const sueldoNeto = sueldoTotal - seguroSocial;
console.log(`Tu sueldo normal es ${sueldoNormal}`);
console.log(`Tu horas extras fueron ${horasExtras}h`);
console.log(`Tu ingreso total fue ${sueldoTotal}`);
console.log(`Tu descuento por el seguro social fue ${seguroSocial}`);
console.log(`Tu sueldo neto es ${sueldoNeto}`);


