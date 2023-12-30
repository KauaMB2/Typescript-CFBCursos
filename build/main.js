"use strict";
class Conta {
    numero;
    titular;
    saldoConta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoConta = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número: ${this.numero}`);
    }
    saldo() {
        return this.saldoConta;
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log("Valor de depósito muito grande.");
        }
        else {
            this.saldoConta += valor;
        }
    }
    saque(valor) {
        if (valor >= this.saldoConta) {
            this.saldoConta -= valor;
        }
        else {
            console.log("Saldo insuficiente.");
        }
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular); //Pasa para a classe pai
        this.cpf = cpf;
        console.log(`Conta PF criada: ${titular}`);
    }
    info() {
        super.info();
        console.log(`CPF: ${this.cpf}`);
        console.log("-----------------------");
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
    info() {
        super.info();
        console.log(`CPF: ${this.cnpj}`);
        console.log("-----------------------");
    }
}
const c1 = new ContaPJ(123456, "CFB Cursos");
console.log(c1.info());
