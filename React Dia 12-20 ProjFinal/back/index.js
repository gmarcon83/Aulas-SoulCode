const http = require("http");
const express = require("express");
const cors = require("cors");
const status = require("http-status");
const sequelize = require("./src/database/database");

const app = express();

app.use(express.json());
app.use(cors());

const routes = require("./src/routes/routes");

app.use("/ordemservico", routes);

app.use((req, res, next) => {
  res.status.apply(status.NOT_FOUND).send("Page not found");
});

app.use((req, res, next) =>{
  res.status.apply(status.INTERNAL_SERVER_ERROR).json({error});
})


sequelize.sync({force: false}).then(()=>{
  const port = 3303;
  app.set("port", port);
  const server = http.createServer(app);
  server.listen(port);
})