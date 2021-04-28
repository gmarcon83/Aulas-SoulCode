// Importa o express
const express = require("express");
const app = express()

// Importamos o cliente de mongodb
const MongoClient = require("mongodb").MongoClient

// O endereço do BD
const URI = "mongodb+srv://dbuser:dbuser@cluster0.msqwy.mongodb.net/minicrud2-aula?retryWrites=true&w=majority"

// Porta que vamos usar
const PORTA = 3000

// Inicia o servidor na porta PORTA
app.listen(PORTA, () => {
  console.log("Servido ativado na porta " + PORTA);
})

// Setamos o EJS como nosso View para renderizar as páginas
app.set("view engine", "ejs")

// Respondemos a requisiçoes GET no endereço "/" [Endpoint] com uma função
// ["callback"] que tem dois parâmetros, o 1º recebe a requisição e no segundo
// enviamos nossa resposta;
app.get('/', (req, res) => {
  res.render("index.ejs")
});