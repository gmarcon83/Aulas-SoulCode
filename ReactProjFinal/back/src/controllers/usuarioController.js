const Usuario = require("../models/usuarios");
const status = require("http-status");

exports.Insert = (req, res, next) => {
  const login = req.body.login;
  const senha = req.body.senha;
  const admin = req.body.admin;

  Usuario.create({
    login: login,
    senha: senha,
    admin: admin,
  })
    .then((usuario) => {
      if (usuario) {
        res.status(status.OK).send(usuario);
      } else {
        res.status(status.NOT_FOUND).send();
      }
    })
    .catch((erro) => {
      next(erro);
    });
};
