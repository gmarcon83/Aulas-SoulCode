const mongoose = require('mongoose');

// Define a estrutura de dados de autor
const JogoSchema = new mongoose.Schema({
  titulo: {
    type: String, //Tipo do valor
    require: true, // Obrigatório
  },
  lancamento: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('Jogo', JogoSchema);