"use strict";
function iniciarCurso(t) {
    console.log(t);
}
let curso1;
let curso2;
curso1 = {
    titulo: "Typescript",
    des: "Curso de Typescript",
    aula: 100,
    maxAlunos: 50,
    iniciarCurso: iniciarCurso
};
curso2 = {
    titulo: "Javascript",
    des: "Curso de Javascript",
    aula: 100,
};
console.log(curso1);
console.log(curso2);
console.log(typeof (curso1));
