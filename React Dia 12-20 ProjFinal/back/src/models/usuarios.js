const Sequelize = require("sequelize");
const sequelize = require("../database/database.js");

// Define o nome da tabela
const Usuarios = sequelize.define("usuarios", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  login: {
    allowNull: false,
    type: Sequelize.STRING(20),
    validate: {
      len: [6, 20],
    },
  },
  senha: {
    allowNull: false,
    type: Sequelize.STRING(20),
    validate: {
      len: [6, 20],
    },
  },
  admin: {
    allowNull: false,
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = Usuarios;