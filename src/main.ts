function fsoma(...n:number[]): number{
    let s:number=0
    n.forEach((en)=>{
        s+=en
    })
    return s
}
console.log(fsoma(10,20,30))
