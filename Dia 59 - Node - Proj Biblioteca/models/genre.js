const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CursoSchema = new Schema(
  {
    name: {type: String, required: true, maxLength: 100, minLength: 3},
  }
);

// Virtual
CursoSchema
.virtual('url')
.get(() =>'/catalog/curso/' + this._id);

//Export
module.exports = mongoose.model('Curso', CursoSchema);