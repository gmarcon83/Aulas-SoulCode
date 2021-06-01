const Sequelize = require("sequelize");
const sequelize = require("../database/database.js");

// Define o nome da tabela
const EnvolvidosServicos = sequelize.define("envolvidosServicos", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  ativo: {
    allowNull: false,
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = EnvolvidosServicos;
