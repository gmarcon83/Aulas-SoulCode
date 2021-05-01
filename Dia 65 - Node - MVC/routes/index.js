const express = require("express");
const router = express.Router();

// Rotas Página Principal
router.get("/", (req,res =>{
  res.render("index.ejs")
}));
