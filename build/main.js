"use strict";
function f_teste(v, r) {
    return { 1: v, 2: r };
}
console.log(f_teste(10, "10"));
console.log(f_teste("10", 10));
class C_teste {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
const ct1 = new C_teste("10");
console.log(ct1.valor);
