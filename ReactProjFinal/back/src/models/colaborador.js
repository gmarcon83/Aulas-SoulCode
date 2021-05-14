const Sequelize = require("sequelize");
const sequelize = require("../database/database.js");

// Define o nome da tabela
const Colaborador = sequelize.define("colaborador", {
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

module.exports = Colaborador;
