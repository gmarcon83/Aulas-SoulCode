var Curso = require("../models/curso");
exports.index = function (req, res) {
  res.send("Página inicial");
};
// Lista os cursos.
exports.listar_cursos = function (req, res) {
  res.render('index', { lugar: 'Lista de cursos' });
};

// Cria um novo curso.
exports.cadastrar_curso = function (req, res) {
  res.render('index', { lugar: 'Cadastro de curso' });
};