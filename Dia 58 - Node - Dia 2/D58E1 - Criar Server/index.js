const express = require( "express");
const app = express();

app.get("/", (req, res) => {
  res.end('Olá')
});

app.listen(3100, () => console.log("Servidor rodando"))