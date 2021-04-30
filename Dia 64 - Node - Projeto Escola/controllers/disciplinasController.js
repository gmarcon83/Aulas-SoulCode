const Disciplina = require("../models/disciplina");
const async = require("async");

// Listar
exports.listar = (req, res) => {
  Disciplina.find((err, resultado) => {
    if (err) return console.log(err);

    res.render("disciplinas.ejs", { dados: resultado });
  });
};

// Cadastrar
exports.cadastrar = (req, res) => {
  res.render("disciplinasnova.ejs");
};

exports.cadastrarPost = async (req, res) => {
  try {
    const disciplina = new Disciplina({
      nome: req.body.nome,
      cargahoraria: req.body.cargahoraria,
    });
    await disciplina.save();
    res.redirect("../disciplinas");
  } catch (err) {
    res.send(err);
  }
};

// Editar
exports.editar = (req, res) => {
  res.render("disciplinaseditar.ejs");
};

// Apagar
exports.apagar = async (req, res) => {
  try {
    const id = req.params.id;
    await Disciplina.findByIdAndDelete(id);
    res.redirect("/disciplinas");
  } catch (err) {
    res.send(err);
  }
};
