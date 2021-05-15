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
router.post("/colaboradores", ColaboradorController.Insert);
router.get("/colaboradores", ColaboradorController.SearchAll);
router.get(
  "/colaboradoresEnvolvidos",
  ColaboradorController.SearchAllColabEnvolvidos
);
router.get(
  "/colaboradorEnvolvido/:id",
  ColaboradorController.SearchOneColabEnvolvidos
);
router.get("/colaboradores/:id", ColaboradorController.SearchOne);
router.put("/excluirColaborador/:id", ColaboradorController.Delete);
router.put("/editarColaborador/:id", ColaboradorController.Update);

// Rotas Equipamentos
const EquipamentosController = require("../controllers/equipamentoController");
router.post("/equipamentos", EquipamentosController.Insert);
router.get("/equipamentos", EquipamentosController.SearchAll);
router.get("/equipamentos/:id", EquipamentosController.SearchOne);
router.get("/equipamentosItens", EquipamentosController.SearchAllItensServicos);
router.get(
  "/equipamentoItens/:id",
  EquipamentosController.SearchOneItensServicos
);
router.put("/excluirEquipamento/:id", EquipamentosController.Delete);
router.put("/editarEquipamento/:id", EquipamentosController.Update);

// Rotas Servicos
const ServicosController = require("../controllers/servicosController");
router.post("/servicos", ServicosController.Insert);
router.get("/servicos", ServicosController.SearchAll);
router.get("/servicos/:id", ServicosController.SearchOne);
router.put("/excluirServico/:id", ServicosController.Delete);
router.put("/editarServico/:id", ServicosController.Update);

// Rotas Envolvidos Servicos
const EnvolvidosServicosController = require("../controllers/envolvidosServicosController");
router.post("/envolvidosServicos", EnvolvidosServicosController.Insert);
router.get("/envolvidosServicos", EnvolvidosServicosController.SearchAll);
router.get("/envolvidosServicos/:id", EnvolvidosServicosController.SearchOne);
router.put(
  "/excluirEnvolvidoServicos/:id",
  EnvolvidosServicosController.Delete
);
router.put("/editarEnvolvidoServicos/:id", EnvolvidosServicosController.Update);

// Rotas Itens Servicos
const ItensServicosController = require("../controllers/itensServicosController");
router.post("/itensServicos", ItensServicosController.Insert);
router.get("/itensServicos", ItensServicosController.SearchAll);
router.get("/itensServicos/:id", ItensServicosController.SearchOne);
router.put("/excluirItemServicos/:id", ItensServicosController.Delete);
router.put("/editarItemServicos/:id", ItensServicosController.Update);

module.exports = router;
