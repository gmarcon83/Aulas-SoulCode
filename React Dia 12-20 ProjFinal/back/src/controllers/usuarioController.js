const Usuario = require("../models/usuarios");
const status = require("http-status");

exports.Insert = (req, res, next) => {
  Usuario.create({
    ...req.body,
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

exports.SearchAll = (req, res, next) => {
  Usuario.findAll()
    .then((usuario) => {
      res.status(status.OK).send(usuario);
    })
    .catch((erro) => next(erro));
};

exports.SearchOne = (req, res, next) => {
  const id = req.params.id;

  Usuario.findByPk(id)
    .then((usuario) => {
      if (usuario) {
        res.status(status.OK).send(usuario);
      }
      res.status(status.NOT_FOUND).send();
    })
    .catch((erro) => next(erro));
};

exports.Delete = (req, res, next) => {
  const id = req.params.id;

  Usuario.findByPk(id)
    .then((usuario) => {
      if (usuario) {
        usuario.destroy({
          where: { id: id },
        });
        res.status(status.OK).send("Usuário deletado.");
      }
      res.status(status.NOT_FOUND).send();
    })
    .catch((erro) => next(erro));
};

exports.Update = (req, res, next) => {
  const id = req.params.id;

  Usuario.findByPk(id)
    .then((usuario) => {
      if (usuario) {
        usuario
          .update(
            {
              ...req.body,
            },
            {
              where: { id: id },
            }
          )
          .then(res.status(status.OK).send(usuario));
      }
      res.status(status.NOT_FOUND).send();
    })
    .catch((erro) => next(erro));
};
