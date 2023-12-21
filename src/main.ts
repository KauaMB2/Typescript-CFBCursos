const teste=(txt?:string):void=>{
    console.log(`Nome: ${txt}`)
}
const fsoma2=(n:number[]):number=>{
    let s:number=0
    n.forEach((e)=>{
        s+=e
    })
    return s
}

teste("Kauã")
teste()
console.log(fsoma2([1,2,3,4,5]))