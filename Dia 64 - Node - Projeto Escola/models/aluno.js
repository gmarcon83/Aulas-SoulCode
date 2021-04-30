let mongoose = require("mongoose");

let alunoSchema = new mongoose.Schema({
  matricula: {
    type: String,
    required: true,
    maxLenght: 15,
  },
  nome: {
    type: String,
    required: true,
    maxLenght: 80,
  },
  cpf: {
    type: String,
    required: true,
    maxLenght: 14,
  },
  rg: {
    type: String,
    required: true,
    maxLenght: 25,
  },
  endereco: {
    type: String,
    required: true,
    maxLenght: 200,
  },
  telefone: {
    type: String,
    required: true,
    maxLenght: 20,
  },
});

module.exports = mongoose.model("aluno", alunoSchema)