const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CursoSchema = new Schema(
  {
    nome_curso: {type: String, required: true, maxLength: 100, required: true},
    cod_curso: {type: String, required: true, maxLength: 25, required: true},
  }
);
// Virtual
CursoSchema
.virtual('url')
.get(() =>'/curso/' + this._id);
//Export
module.exports = mongoose.model('Curso', CursoSchema);