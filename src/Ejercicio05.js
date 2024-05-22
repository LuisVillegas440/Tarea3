/* 5. Diseñar un algoritmo que resuelva la siguiente expresión matemática: x=((sen(a)+cos(b))*(trunc(a) mod 2))+(raiz(a^3)/(a*b+c)) */
const read = require('prompt-sync')();
function resolucion(a,b,c){
    const senA = Math.sin(a);
    const cosB = Math.cos(b);
    const numeroEntero = Math.trunc(a);
    const mod2 = numeroEntero % 2;
    const raizCubica = Math.sqrt(Math.pow(a,3));
    const aPorbMasc = (a * b) + c;
    const resultado = ((senA + cosB)* mod2)+(raizCubica/aPorbMasc);
    return resultado;
}
const resuelto = resolucion(4,5,7);
console.log(resuelto);

