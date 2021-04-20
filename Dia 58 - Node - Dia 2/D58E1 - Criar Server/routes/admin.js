const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.end("Pg administrativa inicial");
});

router.get("/posts", (req, res) => {
  res.end("Pg administrativa de posts");
});

router.get("/cadastrarposts", (req, res) => {
  res.send("Pg cadastro de posts");
});

module.exports = router;
