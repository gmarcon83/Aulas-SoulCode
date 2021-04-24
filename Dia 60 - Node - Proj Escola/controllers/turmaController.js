var Turma = require("../models/turma");
exports.index = function (req, res) {
  res.send("Página inicial");
};
// Lista as turmas.
exports.listar_turmas = function (req, res) {
  res.send("Lista turmas");
};

// Cria uma nova turma.
exports.cadastrar_turma = function (req, res) {
  res.send("Criar turma");
};