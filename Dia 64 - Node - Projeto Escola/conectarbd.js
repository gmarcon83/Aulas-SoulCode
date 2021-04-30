const mongoose = require("mongoose");

const LINKDB = "mongodb+srv://admin:admin@cluster0.j5g4e.mongodb.net/escola2?retryWrites=true&w=majority"

async function conectarDB(){
  await mongoose.connect(LINKDB, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("DB conectada")
  return client.db("escola2")
}

module.exports = conectarDB()