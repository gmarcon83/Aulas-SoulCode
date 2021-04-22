const mongoose = require("mongoose");

// Link Atlas
const dbLink =
  "mongodb+srv://dbUser:dbUser@cluster0.r34mk.mongodb.net/local_library?retryWrites=true&w=majority";

mongoose
  .connect(dbLink, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("DB Connection Error: " + err);
  });

const AutorSchema = new mongoose.Schema({
  nome: {
    type: String, //Tipo do valor
    require: true // Obrigatório
  },
  sobrenome: {
    type: String,
    require: true
  },
  sobrenome: {
    type: Number,
    require: false // É o valor padrão, poderia ser omitido
  },
})