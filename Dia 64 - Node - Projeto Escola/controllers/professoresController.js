const Professor = require("../models/professor");

// Listar
exports.listar = (req, res) => {
  Professor.find((err, resultado) => {
    if (err) return console.log(err);

    res.render("professores.ejs", { dados: resultado });
  });
};

// Cadastrar
exports.cadastrar = (req, res) => {
  res.render("professoresnovo.ejs");
};

exports.cadastrarPOST = async (req, res) => {
  try {
    const professor = new Professor({ ...req.body });
    await professor.save();
    res.redirect("/professores");
  } catch (err) {
    return console.log(err);
  }
};

// Editar
exports.editar = async (req, res) => {
  try {
  const resultado = await Professor.findById(req.params.id);
  res.render("professoreseditar.ejs", {dados: resultado});
  } catch (err) {
    res.send(err);
  }
};

exports.editarPOST = async (req, res) => {
  try {
    await Professor.findOneAndReplace({_id: req.params.id},{ ...req.body });
    res.redirect("/professores");
  } catch (err) {
    return console.log(err);
  }
};

// Apagar
exports.apagar = async (req, res) => {
  try {
    await Professor.findByIdAndDelete(req.params.id);
    res.redirect("/professores");
  } catch (err) {
    return console.log(err);
  }
};