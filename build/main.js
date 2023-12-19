"use strict";
let dados = {
    nome: "Kauã",
    idade: 25,
    status: "A",
    comprimento: (nome) => { console.log("Olá, " + nome + "!"); }
};
console.log(typeof (dados));
console.log(dados);
console.log(dados.nome);
dados.nome = "João";
console.log(dados.nome);
dados.comprimento("João");
