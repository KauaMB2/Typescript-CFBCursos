class Conta{
    protected numero:number
    protected titular:String
    private saldoConta:number
    constructor(titular:string){
        this.numero=this.gerarNumeroConta()
        this.titular=titular
        this.saldoConta=0
    }
    public gerarNumeroConta():number{
        return Math.floor(Math.random()*100000)+1
    }
    protected info():void{
        console.log(`Titular: ${this.titular}`)
        console.log(`Número: ${this.numero}`)
    }
    public get saldo():number{//Getter
        return this.saldoConta
    }
    public set saldo(novoSaldo:number){
        this.saldoConta=novoSaldo
    }
    public deposito(valor:number){
        if(valor>1000){
            console.log("Valor de depósito muito grande.")
        }else{
            this.saldoConta+=valor
        }
    }
    protected saque(valor: number){
        if(valor >= this.saldoConta){
            this.saldoConta-=valor
        }else{
            console.log("Saldo insuficiente.")
        }
    }
}
class ContaPF extends Conta{//ContaPF herda metodos e propriedades de Conta
    cpf:number
    constructor(cpf:number, titular:string){
        super(titular)//Pasa para a classe pai
        this.cpf=cpf
        console.log(`Conta PF criada: ${titular}`)
    }
    public info():void{
        super.info()
        console.log(`CPF: ${this.cpf}`)
        console.log("-----------------------")
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
    
    public info():void{
        super.info()
        console.log(`CPF: ${this.cnpj}`)
        console.log("-----------------------")
    }
}

const c1= new ContaPJ(123456, "CFB Cursos")
c1.info()
console.log(c1.saldo)
