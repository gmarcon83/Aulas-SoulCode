const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('Página Inicial de Usuáros');
});

router.get('/cadastro', (req, res, next) => {
  res.send('Cadastro');
});

module.exports = router;
