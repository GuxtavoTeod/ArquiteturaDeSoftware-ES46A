const Aluno = require("./Aluno");
const Turma = require("./Turma");
const TurmaPresencial = require("./TurmaPresencial");

const aluno = new Aluno("Gustavo Teodoro", "gustavinho123", "2411393");
const turma = new Turma("ES46A", 8);
const turmaPresencial = new TurmaPresencial("ES46B", 7, 80);

console.log(aluno);
console.log(turma);
console.log(turmaPresencial);

console.log("Aluno aprovado na turma: ", turma.aprovado());
console.log("Aluno aprovado na turma presencial: ", turmaPresencial.aprovado());
