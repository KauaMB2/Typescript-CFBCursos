let numeros:number[]=[20,30,40]

numeros.push(50)
numeros.unshift(10)
numeros.pop()
numeros.shift()
console.log(numeros)

let numeros_ro:ReadonlyArray<number>=[200,300,400]
console.log(numeros_ro)