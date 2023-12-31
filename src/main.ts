interface curso{
    titulo:string
    des:string
    aula:number
    maxAlunos?:number
}
let curso1:curso
let curso2:curso
curso1={
    titulo:"Typescript",
    des:"Curso de Typescript",
    aula:100,
    maxAlunos:50
}
curso2={
    titulo:"Javascript",
    des:"Curso de Javascript",
    aula:100,
}
console.log(curso1)
console.log(curso2)
console.log(typeof(curso1))

