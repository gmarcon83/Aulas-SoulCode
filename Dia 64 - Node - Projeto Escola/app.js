const express = require("express")
const app = express()
const mongoose = require("mongoose")

// Conexão a DB
const LINKDB = "mongodb+srv://admin:admin@cluster0.j5g4e.mongodb.net/escola2?retryWrites=true&w=majority"

mongoose.connect(LINKDB, { useUnifiedTopology: true, useNewUrlParser: true  }, (err, client) => {
  if (err) return console.log(err);

  db = mongoose.connection;
  console.log("BD Conectado");
});


// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// configura a view
app.set("view engine", "ejs");

// Importa as Routes
const Router = require('./routes/index');
app.use('/', Router);


// Iniciamos o servidor
const PORTA = 3000;

app.listen(PORTA, () => {
  console.log("Servidor ativado na porta " + PORTA);
});