var Aluno = require("../models/aluno");
exports.index = function (req, res) {
  res.send("Página inicial");
};
// Lista os alunos
exports.listar_alunos = function (req, res) {
  res.send("Lista alunos");
};

// Cria um novo aluno.
exports.cadastrar_aluno = function (req, res) {
  res.send("Criar aluno");
};
