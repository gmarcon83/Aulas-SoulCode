const Sequelize = require("sequelize");
const sequelize = require("../database/database.js");

// Define o nome da tabela
const ItensServicos = sequelize.define("itensServicos", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  defeito: {
    allowNull: false,
    type: Sequelize.STRING(150),
    validate: {
      len: [1, 150],
    },
  },
});

module.exports = ItensServicos;
