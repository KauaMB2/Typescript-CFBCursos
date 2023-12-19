let nvalor:number
let svalor:string
let uvalor:unknown

uvalor=10
svalor=<string>uvalor
nvalor=+10
nvalor=<number>uvalor
svalor=nvalor.toString()
console.log(typeof(svalor))

// console.log(typeof(uvalor))
// console.log(nvalor)
// console.log(typeof(svalor))
// console.log(svalor)
