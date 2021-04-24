const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MatriculaSchema = new Schema(
  {
    cod_matricula: {type: String, required: true, maxLength: 25},
    matricula: {type: Schema.Types.ObjectId, ref: 'Curso', required: true},
    matricula: {type: Schema.Types.ObjectId, ref: 'Turma', required: true},
  }
);
// Virtual
MatriculaSchema
.virtual('url')
.get(() =>'/matricula/' + this._id);
//Export
module.exports = mongoose.model('Matricula', MatriculaSchema);