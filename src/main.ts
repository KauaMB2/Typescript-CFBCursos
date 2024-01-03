
namespace Veiculos{
    export class Carro{
        nome:string
        motor:number
        constructor(nome:string){
            this.nome=nome
            this.motor=new Motores.Motor(100).pot
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
        pot:number
        constructor(pot:number){
            this.pot=pot
        }
    }
}

const p1=new Veiculos.Carro("Rapid")
console.log(p1.nome)