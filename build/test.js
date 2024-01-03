"use strict";
var Carros;
(function (Carros) {
    class Carro {
        nome;
        constructor(nome) {
            this.nome = nome;
        }
    }
    Carros.Carro = Carro;
})(Carros || (Carros = {}));
var Motores;
(function (Motores) {
    class Turbo {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
    }
    Motores.Turbo = Turbo;
    class Motor {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
