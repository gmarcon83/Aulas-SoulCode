var Turma = require("../models/turma");
exports.index = function (req, res) {
  res.send("Página inicial");
};
// Lista as turmas.
exports.listar_turmas = function (req, res) {
  res.render('index', { lugar: 'Lista de turmas' });
};

// Cria uma nova turma.
exports.cadastrar_turma = function (req, res) {
  res.render('index', { lugar: 'Cadastro de turma' });
};