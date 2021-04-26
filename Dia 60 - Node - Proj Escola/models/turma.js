const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TurmaSchema = new Schema(
  {
    nome_turma: {type: String, required: true, maxLength: 100, required: true},
    cod_turma: {type: String, required: true, maxLength: 25, required: true},
  }
);
// Virtual
TurmaSchema
.virtual('url')
.get(() =>'/turma/' + this._id);
//Export
module.exports = mongoose.model('Turma', TurmaSchema);