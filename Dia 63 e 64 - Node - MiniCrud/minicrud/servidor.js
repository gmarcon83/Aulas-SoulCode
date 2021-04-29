// ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲ //
// --------------- Imports --------------- //
// ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ //

// Importa o express
const express = require("express");
const app = express();

// Importamos o cliente de mongodb
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

// Usando urlencoded com Middleware
app.use(express.urlencoded({ extended: true }));

// ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲ //
// -------- Conectando a database -------- //
// ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ //

// O endereço do BD
const URI =
  "mongodb+srv://dbuser:dbuser@cluster0.msqwy.mongodb.net/minicrud2-aula?retryWrites=true&w=majority";

// Conectamos a o banco de dados em URI, e recebemos um callback que tem dois
// parâmetros o primeiro é o erro, o segundo é a conexão com o banco de dados

MongoClient.connect(URI, { useUnifiedTopology: true }, (err, client) => {
  if (err) return console.log(err);
  db = client.db("minicrud2-aula");
  console.log("BD Conectado");
});

// ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲ //
// ------ Configurações do servidor ------ //
// ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ //

// Setamos o EJS como nosso View para renderizar as páginas
app.set("view engine", "ejs");

// ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲ //
// ------ Inicializando o servidor ------- //
// ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼ //

// Porta que vamos usar
const PORTA = 3000;

// Inicia o servidor na porta PORTA
app.listen(PORTA, () => {
  console.log("Servido ativado na porta " + PORTA);
});

// Respondemos a requisiçoes GET no endereço "/" [Endpoint] com uma função
// ["callback"] que tem dois parâmetros, o 1º recebe a requisição e no segundo
// enviamos nossa resposta;
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/mostrar", (re, res) => {
  // Accesamos o banco de dados na coleçao "dados", fizemos uma busca "vazia"
  // então achamos tudo, colocamos os resultados em uma Array
  db.collection("dados")
    .find()
    .toArray((err, result) => {
      if (err) return console.log(err);

      res.render("mostrar.ejs", { dados: result });
    });
});

// Mesma lógica mas com requisição POST em /mostrar
app.post("/mostrar", (req, res) => {
  // Salvamos nossa requisição na collection dados. .save aceita dois parâmetros
  // a informação a ser salva e um callback com (erro, resultado);
  db.collection("dados").save(req.body, (err, result) => {
    if (err) return console.log(err);

    console.log("Cadastrado no BD: " + req.body);
    res.redirect("/");
  });
});

// Interceptados a requisição e isolamos o final dela dentro de do parametro id
// colocamos esse valor em uma const id
app
  .route("/editar/:id")
  .get((req, res) => {
    const id = req.params.id;
    // Buscamos em nossa db pelo id id e armazenamos em uma array
    db.collection("dados")
      .find(ObjectId(id))
      .toArray((err, result) => {
        if (err) return res.send(err);

        // Chamamos a pagina editar, passando os resultado dentro de dados
        res.render("editar.ejs", { dados: result });
      });
  })
  // Recebe a requisição POST do formulário
  .post((req, res) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const cidade = req.body.cidade;

    db.collection("dados").updateOne(
      { _id: ObjectId(id) },
      {
        $set: {
          nome: nome,
          cidade: cidade,
        },
      },
      (err, result) => {
        if (err) return res.send(err);

        res.redirect("/mostrar");
      }
    );
  });

// Delete
app.route("/apagar/:id").get((req, res) => {
  const id = req.params.id;
  db.collection("dados").deleteOne({ _id: ObjectId(id) }, (err, result) => {
    if (err) return res.send(err);

    res.redirect("/mostrar");
  });
});
