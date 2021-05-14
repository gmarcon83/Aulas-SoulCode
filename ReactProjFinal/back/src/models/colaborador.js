const Sequelize = require("sequelize");
const sequelize = require("../database/database.js");
const EnvolvidosServicos = require("../models/envolvidosServicos");

// Define o nome da tabela
const Colaboradores = sequelize.define("colaboradores", {
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

Colaboradores.hasMany(EnvolvidosServicos, {
  foreignKey: "idColaborador",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  as: "colabs",
});

module.exports = Colaboradores;
