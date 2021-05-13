const express = require("express");
const router = express.Router();

const UsuariosController = require("../controllers/usuarioController");

router.post("/usuarios", UsuariosController.Insert);
router.get("/usuarios", UsuariosController.SearchAll);
router.get("/usuarios/:id", UsuariosController.SearchOne);
router.put("/excluirUsuario/:id", UsuariosController.Delete);
router.put("/editarUsuario/:id", UsuariosController.Update);

module.exports = router;
