const express = require("express")
const router = express.Router();

const UsuariosController = require("../controllers/usuarioController");

router.post("/usuarios", UsuariosController.Insert);

module.exports = router;
