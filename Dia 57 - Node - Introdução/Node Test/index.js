// O require importa o modulo
const express = require("express")
const app = express();


// Rotas

// Define o que acontece na root
app.get("/", (req, res) => {
  // Resposta da rota
  res.end('Ola Mundo\n');
})

// Serve a pasta public para quem acessa o servidor
//app.use(express.static("public"));


// Inicia o Servidor na porta 8000
app.listen(8000, () => (console.log("Funcionando na porta 8000")))
