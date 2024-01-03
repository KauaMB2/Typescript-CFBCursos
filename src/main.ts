
namespace Veiculos{
    export class Carro{
        nome:string
        motor:Motores.Motor
        constructor(nome:string){
            this.nome=nome
            this.motor=new Motores.Motor(3,10)
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

const p1=new Veiculos.Carro("Rapid")
console.log(p1.nome)
