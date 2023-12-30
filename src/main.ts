class Computador{
    nome:string
    ram:number
    cpu:number
    ligado:boolean
    constructor(n:string, ram:number, cpu:number){
        this.nome=n
        this.ram=ram
        this.cpu=cpu
        this.ligado=false
        console.log(`Computador ${this.nome} criado`)
    }
}

//Instanciando o objeto
const c1=new Computador("Rapidão", 64, 10)
const c2=new Computador("Carão", 32, 5)
const c3=new Computador("Gamer", 128, 10)

console.log(c1.nome)
c1.nome="Lenovo T430"
console.log(c1.nome)