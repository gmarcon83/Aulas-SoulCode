const Aluno = require("../models/aluno");

// Listar
exports.listar = (req, res) => {
  Aluno.find((err, resultado) => {
    if (err) return console.log(err);

    res.render("alunos.ejs", { dados: resultado });
  });
};

// Cadastrar
exports.cadastrar = (req, res) => {
  res.render("alunosnovo.ejs");
};

exports.cadastrarPOST = async (req, res) => {
  try {
    const aluno = new Aluno({ ...req.body });
    await aluno.save();
    res.redirect("/alunos");
  } catch (err) {
    return console.log(err);
  }
};

// Editar
exports.editar = async (req, res) => {
  try {
  const resultado = await Aluno.findById(req.params.id);
  res.render("alunoseditar.ejs", {dados: resultado});
  } catch (err) {
    res.send(err);
  }
};

exports.editarPOST = async (req, res) => {
  try {
    await Aluno.findOneAndReplace({_id: req.params.id},{ ...req.body });
    res.redirect("/alunos");
  } catch (err) {
    return console.log(err);
  }
};

// Apagar
exports.apagar = async (req, res) => {
  try {
    await Aluno.findByIdAndDelete(req.params.id);
    res.redirect("/alunos");
  } catch (err) {
    return console.log(err);
  }
};