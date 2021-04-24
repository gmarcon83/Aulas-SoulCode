var Matricula = require("../models/matricula");
exports.index = function (req, res) {
  res.send("Página inicial");
};
// Lista as matriculas.
exports.listar_matriculas = function (req, res) {
  res.send("Lista matriculas");
};

// Cria uma nova matricula.
exports.cadastrar_matricula = function (req, res) {
  res.send("Criar matricula");
};