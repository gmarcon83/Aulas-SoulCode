const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CursoSchema = new Schema(
  {
    nome_curso: {type: String, required: true, maxLength: 100},
    cod_curso: {type: String, required: true, maxLength: 25},
  }
);
// Virtual
CursoSchema
.virtual('url')
.get(() =>'/curso/' + this._id);
//Export
module.exports = mongoose.model('Curso', CursoSchema);