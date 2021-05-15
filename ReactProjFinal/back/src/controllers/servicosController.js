const Servicos = require("../models/servicos");
const status = require("http-status");

exports.Insert = (req, res, next) => {
  Servicos.create({
    ...req.body,
  })
    .then((servicos) => {
      if (servicos) {
        res.status(status.OK).send(servicos);
      } else {
        res.status(status.NOT_FOUND).send();
      }
    })
    .catch((erro) => {
      next(erro);
    });
};

exports.SearchAll = (req, res, next) => {
  Servicos.findAll()
    .then((servicos) => {
      res.status(status.OK).send(servicos);
    })
    .catch((erro) => next(erro));
};

exports.SearchOne = (req, res, next) => {
  const id = req.params.id;

  Servicos.findByPk(id)
    .then((servicos) => {
      if (servicos) {
        res.status(status.OK).send(servicos);
      }
      res.status(status.NOT_FOUND).send();
    })
    .catch((erro) => next(erro));
};

exports.Delete = (req, res, next) => {
  const id = req.params.id;

  Servicos.findByPk(id)
    .then((servicos) => {
      if (servicos) {
        servicos.destroy({
          where: { id: id },
        });
        res.status(status.OK).send("Serviço deletado.");
      }
      res.status(status.NOT_FOUND).send();
    })
    .catch((erro) => next(erro));
};

exports.Update = (req, res, next) => {
  const id = req.params.id;

  Servicos.findByPk(id)
    .then((servicos) => {
      if (servicos) {
        servicos
          .update(
            {
              ...req.body,
            },
            {
              where: { id: id },
            }
          )
          .then(res.status(status.OK).send(servicos));
      }
      res.status(status.NOT_FOUND).send();
    })
    .catch((erro) => next(erro));
};
