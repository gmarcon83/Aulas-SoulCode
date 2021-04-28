const express = require("express");
const app = express()

const PORTA = 3000

// Inicia o servidor na porta
app.listen(PORTA, () => {
  console.log("Servido ativado em porta " + PORTA);
})

// Respondemos a requisiçoes GET no endereço "/" [Endpoint] com uma função
// ["callback"] que tem dois parâmetros, o 1º recebe a requisição e mo segundo
// enviamos nossa resposta;
app.get('/', (req, res) => {
  res.send("Olá, você está em '/'")
});