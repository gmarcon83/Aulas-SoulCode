const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AlunoSchema = new Schema(
  {
    primeiro_nome: {type: String, required: true, maxLength: 100},
    segundo_nome: {type: String, required: true, maxLength: 100},
    endereco: {type: String, required: true, maxLength: 100},
    cpf: {type: String, required: true, maxLength: 14},
    matricula: {type: Schema.Types.ObjectId, ref: 'Matricula', required: true},
  }
);
// Virtual
AlunoSchema
.virtual('url')
.get(() =>'/aluno/' + this._id);
//Export
module.exports = mongoose.model('Aluno', AlunoSchema);