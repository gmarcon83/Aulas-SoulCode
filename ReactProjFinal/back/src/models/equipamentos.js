const Sequelize = require("sequelize");
const sequelize = require("../database/database.js");

// Define o nome da tabela
const Equipamentos = sequelize.define("equipamentos", {
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
  marca: {
    allowNull: false,
    type: Sequelize.STRING(50),
    validate: {
      len: [1, 50],
    },
  },
  modelo: {
    allowNull: false,
    type: Sequelize.STRING(50),
    validate: {
      len: [1, 50],
    },
  },
  tipo: {
    allowNull: false,
    type: Sequelize.STRING(50),
    validate: {
      len: [1,50],
    },
  },
});

module.exports = Equipamentos;