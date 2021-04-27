const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GenreSchema = new Schema(
  {
    name: {type: String, required: true, maxLength: 100, minLength: 3},
  }
);

// Virtual
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

//Export
module.exports = mongoose.model('Genre', GenreSchema);