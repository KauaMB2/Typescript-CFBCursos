"use strict";
class Computador {
    nome;
    ram;
    cpu;
    ligado;
    constructor(n, ram, cpu) {
        this.nome = n;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
        console.log(`Computador ${this.nome} criado`);
    }
    info() {
        console.log(`Nome: ${this.nome}`);
        console.log(`RAM: ${this.ram}`);
        console.log(`CPU: ${this.cpu}`);
        console.log(`Ligado: ${this.ligado ? "Sim" : "Não"}`);
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    upgradeRam(qtde) {
        if (qtde <= 0) {
            console.log("Não aceitamos valores inválidos.");
            return;
        }
        this.ram = qtde;
    }
}
//Instanciando o objeto
const c1 = new Computador("Rapidão", 64, 10);
const c2 = new Computador("Carão", 32, 5);
const c3 = new Computador("Gamer", 128, 10);
c1.nome = "Lenovo T430";
c1.ligar();
c1.upgradeRam(-10);
c1.upgradeRam(12);
c1.info();
