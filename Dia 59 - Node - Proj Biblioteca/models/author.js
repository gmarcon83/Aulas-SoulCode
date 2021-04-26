const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const AuthorSchema = new Schema(
  {
    first_name: {type: String, required: true, maxLength: 100},
    family_name: {type: String, required: true, maxLength: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
  }
);
// Virtual for author's full name
AuthorSchema
.virtual('name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});
// Virtual for author's lifespan
AuthorSchema
.virtual('lifespan')
.get(function () {
  return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
});
// Formata a data com o Luxon
AuthorSchema
.virtual('date_of_death_formatted')
.get(function () {
  if (this.date_of_death == undefined) return "N/A"
  return DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED);
});
AuthorSchema
.virtual('date_of_birth_formatted')
.get(function () {
  if (this.date_of_birth == undefined) return "N/A"
  return DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED);
});
// Virtual for author's URL
AuthorSchema
.virtual('url')
.get(function () {
  return '/catalog/author/' + this._id;
});
//Export model
module.exports = mongoose.model('Author', AuthorSchema);