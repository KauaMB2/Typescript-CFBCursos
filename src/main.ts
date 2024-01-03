function f_teste<T, U>(v:T,r:U){
    return {1:v,2:r}
}
console.log(f_teste<number,string>(10,"10"))
console.log(f_teste<string,number>("10",10))

class C_teste<T>{
    public valor:T
    constructor(valor:T){
        this.valor=valor
    }
}

const ct1=new C_teste<string>("10")
console.log(ct1.valor)