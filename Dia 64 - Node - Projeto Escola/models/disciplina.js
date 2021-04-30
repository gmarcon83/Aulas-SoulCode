let mongoose = require("mongoose");

let disciplinaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    maxLenght: 80,
  },
  cargahoraria: {
    type: String,
    required: true,
    maxLenght: 4,
  },
});

module.exports = mongoose.model("disciplina", disciplinaSchema)