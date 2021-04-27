var Matricula = require("../models/matricula");
exports.index = function (req, res) {
  res.send("Página inicial");
};
// Lista as matriculas.
exports.listar_matriculas = function (req, res) {
  res.render('index', { lugar: 'Lista de matriculas' });
};

// Cria uma nova matricula.
exports.cadastrar_matricula = function (req, res) {
  res.render('index', { lugar: 'Cadastro de matricula' });
};