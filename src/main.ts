let coisas:[string, number, boolean]=["Corda", 1, true]
console.log(coisas)
coisas[2]=false
console.log(coisas)
console.log(coisas[2])

console.log("Read only: ")
let coisas2:readonly[string, number, boolean]=["Corda", 1, true]
console.log(coisas2)
console.log(coisas2[2])
