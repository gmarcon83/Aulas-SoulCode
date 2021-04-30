const Disciplina = require("../models/disciplina");

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
    res.redirect("/disciplinas");
  } catch (err) {
    res.send(err);
  }
};

// Editar
exports.editar = async (req, res) => {
  try {
    const resultado = await Disciplina.findById(req.params.id);
    res.render("disciplinaseditar.ejs", { dados: resultado });
  } catch (err) {
    res.send(err);
  }
};

exports.editarPOST = async (req, res) => {
  try {
    // Acha a entrada pela id e subsitui
    await Disciplina.replaceOne({_id: req.params.id},{
      nome: req.body.nome,
      cargahoraria: req.body.cargahoraria,
    });
    res.redirect("/disciplinas");
  } catch (err) {
    res.send(err);
  }
};

// Apagar
exports.apagar = async (req, res) => {
  try {
    await Disciplina.findByIdAndDelete(req.params.id);
    res.redirect("/disciplinas");
  } catch (err) {
    res.send(err);
  }
};
