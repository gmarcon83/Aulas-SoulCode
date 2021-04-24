const mongoose = require("mongoose");
const express = require("express");
const JogoSchema = require("./models/jogo");
const app = express();


// Para permitir acesso interno
const cors = require("cors");
const corsConf = {
  origin: 'http://localhost:3000'
}

app.use(cors(corsConf))


// Link DB
const dbLink =
  "mongodb+srv://gmarcon:FUENagYMog4wAlnZ@cluster0.baprm.mongodb.net/jogosDatabase?retryWrites=true&w=majority";

// Conecta a database
mongoose
  .connect(dbLink, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("DB Connection Error: " + err);
  });

// Um ex para teste
const game = new JogoSchema({
  titulo: "Game 1",
  lancamento: "14-12-1983",
});

//enviarDB(game);

async function enviarDB(entrada) {
  try {
    const result = await entrada.save();
    console.log("Cadastrado " + result);
  } catch (err) {
    console.log("createDocument error: " + err);
  }
}

app.get("/jogos", (req, res) => {
  JogoSchema.find({}, (err, jogos) => {
    if (err) console.error(err);
    res.send(jogos);
  });
});

app.listen(3100, () => console.log("Servidor rodando"));