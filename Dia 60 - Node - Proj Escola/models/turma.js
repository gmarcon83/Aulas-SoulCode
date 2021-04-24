const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TurmaSchema = new Schema(
  {
    nome_turma: {type: String, required: true, maxLength: 100},
    cod_turma: {type: String, required: true, maxLength: 25},
  }
);
// Virtual
TurmaSchema
.virtual('url')
.get(() =>'/turma/' + this._id);
//Export
module.exports = mongoose.model('Turma', TurmaSchema);