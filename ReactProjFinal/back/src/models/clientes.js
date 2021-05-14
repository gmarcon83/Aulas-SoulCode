const Sequelize = require("sequelize");
const sequelize = require("../database/database.js");
const equipamentos = require("./equipamentos")

// Define o nome da tabela
const Clientes = sequelize.define("clientes", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  nome: {
    allowNull: false,
    type: Sequelize.STRING(40),
    validate: {
      len: [1, 40],
    },
  },
  telefone: {
    allowNull: false,
    type: Sequelize.STRING(25),
    validate: {
      len: [2, 25],
    },
  },
});

Clientes.hasMany(equipamentos, {
  foreignKey: "idCliente",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  as: "equip"
});

module.exports = Clientes;
