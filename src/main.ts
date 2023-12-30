class Conta{
    numero:number
    titular:String
    constructor(titular:string){
        this.numero=this.gerarNumeroConta()
        this.titular=titular
    }
    gerarNumeroConta():number{
        return Math.floor(Math.random()*100000)+1
    }
}
class ContaPF extends Conta{//ContaPF herda metodos e propriedades de Conta
    cpf:number
    constructor(cpf:number, titular:string){
        super(titular)//Pasa para a classe pai
        this.cpf=cpf
    }
}
class ContaPJ extends Conta{//ContaPJ herda metodos e propriedades de Conta
    cnpj:number
    constructor(cnpj:number, titular:string){
        super(titular)//Pasa para a classe pai
        this.cnpj=cnpj
    }
}

const c1= new ContaPJ(123456, "Abc")

console.log(c1.numero)

