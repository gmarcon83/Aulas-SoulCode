const express = require("express");
const mongoose = require("mongoose");

const app = express();

const Aluno = require("./models/aluno");
const Curso = require("./models/curso");
const Matricula = require("./models/matricula");
const Turma = require("./models/turma");

const LINKDB = "mongodb+srv://admin:admin@cluster0.j5g4e.mongodb.net/escola?retryWrites=true&w=majority"

async function connectDB(){
  await mongoose.connect(LINKDB, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("DB connect")
}

app.use(express.json({extended:false}))




app.post("/alunosave", async (req,res) => {
  const{primeiro_nome, segundo_nome, cpf} = req.body;
  let data = {};
  data.primeiro_nome = primeiro_nome;
  data.segundo_nome = segundo_nome;
  data.cpf = cpf;
  let alunoModel = new Aluno(data);
  await alunoModel.save();
  res.send(alunoModel);
})

app.post("/cursosave", async (req,res) => {
  const{nome_curso, cod_curso} = req.body;
  let data = {};
  data.nome_curso = nome_curso;
  data.cod_curso = cod_curso;
  let cursoModel = new Curso(data);
  await cursoModel.save();
  res.send(cursoModel);
})

app.post("/turmasave", async (req,res) => {
  const{nome_turma, cod_turma} = req.body;
  let data = {};
  data.nome_turma = nome_turma;
  data.cod_turma = cod_turma;
  let turmaModel = new Turma(data);
  await turmaModel.save();
  res.send(turmaModel);
})

app.post("/matriculasave", async (req,res) => {
  const{cod_matricula, aluno, turma, curso} = req.body;
  let data = {};
  data.cod_matricula = cod_matricula;
  data.aluno = aluno;
  data.turma = turma;
  data.curso = curso;
  let matriculaModel = new Matricula(data);
  await matriculaModel.save();
  res.send(matriculaModel);
})


const PORT = 3000;

app.listen(PORT, (req, res) => console.log("Inciado em " + PORT))
