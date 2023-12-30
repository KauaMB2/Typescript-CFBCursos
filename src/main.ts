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
    info():void{
        console.log(`Nome: ${this.nome}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`CPU: ${this.cpu}`)
        console.log(`Ligado: ${this.ligado ? "Sim": "Não"}`)
    }
    ligar():void{
        this.ligado=true
    }
    desligar():void{
        this.ligado=false
    }
}

//Instanciando o objeto
const c1=new Computador("Rapidão", 64, 10)
const c2=new Computador("Carão", 32, 5)
const c3=new Computador("Gamer", 128, 10)

c1.nome="Lenovo T430"
c1.ligado=true
c1.info()
