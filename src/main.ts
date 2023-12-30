class Conta{
    protected numero:number
    protected titular:String
    constructor(titular:string){
        this.numero=this.gerarNumeroConta()
        this.titular=titular
    }
    public gerarNumeroConta():number{
        return Math.floor(Math.random()*100000)+1
    }
    protected info():void{
        console.log(`Titular: ${this.titular}`)
        console.log(`Número: ${this.numero}`)
        console.log("------------------------------")
    }
}
class ContaPF extends Conta{//ContaPF herda metodos e propriedades de Conta
    cpf:number
    constructor(cpf:number, titular:string){
        super(titular)//Pasa para a classe pai
        this.cpf=cpf
        console.log(`Conta PF criada: ${titular}`)
        this.info()
    }
}
class ContaPJ extends Conta{//ContaPJ herda metodos e propriedades de Conta
    cnpj:number
    constructor(cnpj:number, titular:string){
        super(titular)//Pasa para a classe pai
        this.cnpj=cnpj
        console.log(`Conta PJ criada: ${titular}`)
        this.info()
    }
}

const c1= new ContaPJ(123456, "CFB Cursos")

//console.log(c1.numero)

