const express = require("express");
const router = express.Router();

// Rotas Usuarios
const UsuariosController = require("../controllers/usuarioController");
router.post("/usuarios", UsuariosController.Insert);
router.get("/usuarios", UsuariosController.SearchAll);
router.get("/usuarios/:id", UsuariosController.SearchOne);
router.put("/excluirUsuario/:id", UsuariosController.Delete);
router.put("/editarUsuario/:id", UsuariosController.Update);

// Rotas Clientes
const ClientesController = require("../controllers/clienteController");
router.post("/clientes", ClientesController.Insert);
router.get("/clientes", ClientesController.SearchAll);
router.get(
  "/equipamentosDosClientes",
  ClientesController.SearchAllEquipsClientes
);
router.get("/clientes/:id", ClientesController.SearchOne);
router.get("/clientesEquips/:id", ClientesController.SearchOneEquipsCliente);
router.put("/excluirCliente/:id", ClientesController.Delete);
router.put("/editarCliente/:id", ClientesController.Update);

// Rotas Colaboradores
const ColaboradorController = require("../controllers/colaboradorController");
router.post("/colaborador", ColaboradorController.Insert);
router.get("/colaborador", ColaboradorController.SearchAll);
router.get("/colaborador/:id", ColaboradorController.SearchOne);
router.put("/excluirColaborador/:id", ColaboradorController.Delete);
router.put("/editarColaborador/:id", ColaboradorController.Update);

// Rotas Equipamentos
const EquipamentosController = require("../controllers/equipamentoController");
router.post("/equipamentos", EquipamentosController.Insert);
router.get("/equipamentos", EquipamentosController.SearchAll);
router.get("/equipamentos/:id", EquipamentosController.SearchOne);
router.put("/excluirEquipamento/:id", EquipamentosController.Delete);
router.put("/editarEquipamento/:id", EquipamentosController.Update);

module.exports = router;
