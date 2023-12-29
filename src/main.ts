class Computador{
    nome:string="void"
    ram:number=0
    cpu:number=0
    ligado:boolean=false
}
const c1=new Computador()
const c2=new Computador()
const c3=new Computador()

console.log(c1.nome)
c1.nome="Lenovo T430"
console.log(c1.nome)