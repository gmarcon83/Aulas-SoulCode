const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AlunoSchema = new Schema(
  {
    primeiro_nome: {type: String, required: true, maxLength: 100, required: true},
    segundo_nome: {type: String, required: true, maxLength: 100, required: true},
    cpf: {type: String, required: true, maxLength: 14, required: true},
  }
);
// Virtual
AlunoSchema
.virtual('url')
.get(() =>'/aluno/' + this._id);
//Export
module.exports = mongoose.model('Aluno', AlunoSchema);