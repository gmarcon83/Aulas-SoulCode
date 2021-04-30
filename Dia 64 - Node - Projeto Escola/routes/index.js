const express = require('express');
const router = express.Router();
const disciplinas = require('../controllers/disciplinasController.js')

// Página Inicial.
router.get('/', (req, res) => {
  res.render("index.ejs");
 });


// Rotas Disciplinas

// Listar
router.get('/disciplinas', disciplinas.listar)

// Cadastrar
router.get('/disciplinas/nova', disciplinas.cadastrar)
router.post('/disciplinas/nova', disciplinas.cadastrarPost)

// Editar
router.get('/disciplinas/editar/:id', disciplinas.editar)

// Apagar
router.get('/disciplinas/apagar/:id', disciplinas.apagar)









module.exports = router;