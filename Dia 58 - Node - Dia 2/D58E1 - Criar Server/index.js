const express = require("express");
const app = express();3
const admin = require("./routes/admin")

// Rotas Iniciais
app.get("/", (req, res) => {
  res.end("Ola");
});

app.get("/contato", (req, res) => {
  res.end("Aqui e contato");
});

app.get("/quemsomos", (req, res) => {
  res.send("Pagina do quem somos");
});


// Grupo de Rotas
app.use("/admin", admin)




// Inicia o servidor na porta
app.listen(3100, () => console.log("Servidor rodando"));
