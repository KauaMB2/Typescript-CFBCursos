
namespace Veiculos{
    enum Cores{"Preto", "Branco", "Vermelho", "Amarelo", "Azul", "Prata"}
    export class Carro{
        private nome:string
        private motor:Motores.Motor
        private cor:string
        constructor(nome:string, motor: Motores.Motor, cor:Cores){
            this.nome=nome
            this.motor=motor
            this.cor=Cores[cor]
        }
        public ligar(){
            this.motor.liga=true
        }
        public desliga(){
            this.motor.liga=false
        }
        get meuNome(){
            return this.nome
        }
        get estouLigado(){
            return this.motor.liga
        }
        get pegarCor(){
            return this.cor
        }
    }
    export class CarroEsportivo extends Carro{
        constructor(nome:string, cor: Cores){
            super(nome, new Motores.Motor(6,300, new Motores.Turbo(6)), 2)
        }
    }
    export class CarroPopular extends Carro{
        constructor(nome:string, cor: Cores){
            super(nome, new Motores.Motor(2,100, new Motores.Turbo(1)), 1)
        }
    }
}


namespace Motores{
    export class Turbo{
        pot:number
        constructor(pot:number){
            this.pot=pot
        }
    }
    export class Motor{
        private ligado:boolean
        private cilindros:number
        private pot:number
        constructor(cilindros:number, pot:number, turbo?:Turbo){
            this.pot=pot+(turbo?turbo.pot:0)
            this.ligado=false
            this.cilindros=cilindros
        }
        set liga(ligado:boolean){
            this.ligado=ligado
        }
        get liga(){
            return this.ligado
        }
        get potencia(){
            return this.pot
        }

    }
}

const p1=new Veiculos.Carro("Rapid", new Motores.Motor(3,10),2)
console.log(p1.meuNome)
console.log(p1.estouLigado)
console.log(p1.pegarCor)

