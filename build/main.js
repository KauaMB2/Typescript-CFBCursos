"use strict";
class Conta {
    numero;
    titular;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número: ${this.numero}`);
        console.log("------------------------------");
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular); //Pasa para a classe pai
        this.cpf = cpf;
        console.log(`Conta PF criada: ${titular}`);
        this.info();
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular); //Pasa para a classe pai
        this.cnpj = cnpj;
        console.log(`Conta PJ criada: ${titular}`);
        this.info();
    }
}
const c1 = new ContaPJ(123456, "CFB Cursos");
//console.log(c1.numero)
