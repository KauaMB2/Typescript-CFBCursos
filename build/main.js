"use strict";
class Computador {
    nome = "void";
    ram = 0;
    cpu = 0;
    ligado = false;
}
const c1 = new Computador();
const c2 = new Computador();
const c3 = new Computador();
console.log(c1.nome);
c1.nome = "Lenovo T430";
console.log(c1.nome);
