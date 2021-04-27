const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const JogoSchema = require("./models/jogo");
const app = express();


// Para permitir acesso interno
const cors = require("cors");
const corsConf = {
  origin: 'http://localhost:3000'
}

app.use(cors(corsConf))

// Usa o body-parser como middleware para formatar o JSON que chega
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


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

// Pega na Database
app.get("/jogos", (req, res) => {
  JogoSchema.find({}, (err, jogos) => {
    if (err) console.error(err);
    res.send(jogos);
  });
});

//enviarDB(game);
app.post("/novojogo", async (req, res) => {
  try{
    const jogo = new JogoSchema({
      titulo: req.body.titulo,
      lancamento: req.body.lancamento,
    })
    const result = await jogo.save();
    res.send("Cadastrado: " + result)
  } catch (err) {
    res.send("Erro: " + ERR)
  }
});

app.listen(3100, () => console.log("Servidor rodando"));



// Para teste
async function enviarDB(entrada) {
  try {
    const result = await entrada.save();
    console.log("Cadastrado " + result);
  } catch (err) {
    console.log("createDocument error: " + err);
  }
}