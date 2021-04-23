const mongoose = require("mongoose");

// Link Atlas
const dbLink =
  "mongodb+srv://dbUser:dbUser@cluster0.r34mk.mongodb.net/local_library?retryWrites=true&w=majority";

// Conecta a database
mongoose
  .connect(dbLink, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("DB Connection Error: " + err);
  });

// Define a estrutura de dados de autor
const AutorSchema = new mongoose.Schema({
  nome: {
    type: String, //Tipo do valor
    require: true, // Obrigatório
  },
  sobrenome: {
    type: String,
    require: true,
  },
  idade: {
    type: Number,
    require: false, // É o valor padrão, poderia ser omitido
  },
});

// Define a estrutura de dados de livros
const LivroSchema = new mongoose.Schema({
  ISBN: {
    type: String, //Daria pra usar number dependendo do input
    require: true,
  },
  titulo: {
    type: String,
    require: true,
  },
  autor: {
    type: String,
    require: true,
  },
  paginas: {
    type: Number,
    require: true,
  },
});

// Colocamos na variável a estrutura de "AutorSchema" com o nome "autor"
const autor = new mongoose.model("autor", AutorSchema);
const livro = new mongoose.model("livro", LivroSchema);

// Um ex de autor para teste
const AUTOR = new autor({
  nome: "Monteiro",
  sobrenome: "Lobato",
  idade: 66,
});

// Um ex de livro para teste
const LIVRO = new livro({
  ISBN: "0-345-33392-6",
  titulo: "Ringworld",
  autor: "Larry Niven",
  paginas: 342,
});

enviarDB(LIVRO);

async function enviarDB(entrada) {
  try {
    const result = await entrada.save();
    console.log("Cadastrado " + result);
  } catch (err) {
    console.log("createDocument error: " + err);
  }
}