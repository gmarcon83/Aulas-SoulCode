const express = require("express");
const router = express.Router();

const UsuariosController = require("../controllers/usuarioController");
const ClientesController = require("../controllers/clienteController");
const EquipamentosController = require("../controllers/equipamentoController");

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

// Rotas Clientes
router.post("/equipamentos", EquipamentosController.Insert);
router.get("/equipamentos", EquipamentosController.SearchAll);
router.get("/equipamentos/:id", EquipamentosController.SearchOne);
router.put("/excluirEquipamento/:id", EquipamentosController.Delete);
router.put("/editarEquipamento/:id", EquipamentosController.Update);

module.exports = router;