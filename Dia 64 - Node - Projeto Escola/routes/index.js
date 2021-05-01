const express = require("express");
const router = express.Router();
const alunos = require("../controllers/alunosController.js");
const disciplinas = require("../controllers/disciplinasController.js");
const professores = require("../controllers/professoresController.js");

// Página Inicial.
router.get("/", (req, res) => {
  res.render("index.ejs");
});

// ------------ //
// Rotas Alunos //
// ------------ //

// Listar
router.get("/alunos", alunos.listar);

// Cadastrar
router.get("/alunos/novo", alunos.cadastrar);
router.post("/alunos/novo", alunos.cadastrarPOST);

// Editar
router.get("/alunos/editar/:id", alunos.editar);
router.post("/alunos/editar/:id", alunos.editarPOST);

// Apagar
router.get("/alunos/apagar/:id", alunos.apagar);

// ----------------- //
// Rotas Disciplinas //
// ----------------- //

// Listar
router.get("/disciplinas", disciplinas.listar);

// Cadastrar
router.get("/disciplinas/nova", disciplinas.cadastrar);
router.post("/disciplinas/nova", disciplinas.cadastrarPOST);

// Editar
router.get("/disciplinas/editar/:id", disciplinas.editar);
router.post("/disciplinas/editar/:id", disciplinas.editarPOST);

// Apagar
router.get("/disciplinas/apagar/:id", disciplinas.apagar);

// ----------------- //
// Rotas Professores //
// ----------------- //

// Listar
router.get("/professores", professores.listar);

// Cadastrar
router.get("/professores/novo", professores.cadastrar);
router.post("/professores/novo", professores.cadastrarPOST);

// Editar
router.get("/professores/editar/:id", professores.editar);
router.post("/professores/editar/:id", professores.editarPOST);

// Apagar
router.get("/professores/apagar/:id", professores.apagar);

module.exports = router;