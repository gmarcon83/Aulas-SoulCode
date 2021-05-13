const express = require("express");
const router = express.Router();

const UsuariosController = require("../controllers/usuarioController");
const ClientesController = require("../controllers/clienteController");

// Rotas Usuarios
router.post("/usuarios", UsuariosController.Insert);
router.get("/usuarios", UsuariosController.SearchAll);
router.get("/usuarios/:id", UsuariosController.SearchOne);
router.put("/excluirUsuario/:id", UsuariosController.Delete);
router.put("/editarUsuario/:id", UsuariosController.Update);

// Rotas Clientes
router.post("/clientes", ClientesController.Insert);
router.get("/clientes", ClientesController.SearchAll);
router.get("/clientes/:id", ClientesController.SearchOne);
router.put("/excluirCliente/:id", ClientesController.Delete);
router.put("/editarCliente/:id", ClientesController.Update);

module.exports = router;
