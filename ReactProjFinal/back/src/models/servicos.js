const Sequelize = require("sequelize");
const sequelize = require("../database/database.js");

// Define o nome da tabela
const Servicos = sequelize.define("servicos", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  descricao: {
    allowNull: false,
    type: Sequelize.STRING(200),
    allowNull: false,
    validate: {
      len: [0, 200],
    },
  },
  tipo: {
    allowNull: false,
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  valor: {
    allowNull: false,
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  dataSaida: {
    allowNull: false,
    type: Sequelize.DATE,
    allowNull: false,
  },

});

module.exports = Servicos;
