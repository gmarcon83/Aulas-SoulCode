const Colaboradores = require("../models/colaborador");
const status = require("http-status");
const EnvolvidosServicos = require("../models/envolvidosServicos");

exports.Insert = (req, res, next) => {
  Colaboradores.create({
    ...req.body,
  })
    .then((colaborador) => {
      if (colaborador) {
        res.status(status.OK).send(colaborador);
      } else {
        res.status(status.NOT_FOUND).send();
      }
    })
    .catch((erro) => {
      next(erro);
    });
};

exports.SearchAll = (req, res, next) => {
  Colaboradores.findAll()
    .then((colaborador) => {
      res.status(status.OK).send(colaborador);
    })
    .catch((erro) => next(erro));
};

exports.SearchOne = (req, res, next) => {
  const id = req.params.id;

  Colaboradores.findByPk(id)
    .then((colaborador) => {
      if (colaborador) {
        res.status(status.OK).send(colaborador);
      }
      res.status(status.NOT_FOUND).send();
    })
    .catch((erro) => next(erro));
};

exports.Delete = (req, res, next) => {
  const id = req.params.id;

  Colaboradores.findByPk(id)
    .then((colaborador) => {
      if (colaborador) {
        colaborador.destroy({
          where: { id: id },
        });
        res.status(status.OK).send("Colaborador deletado.");
      }
      res.status(status.NOT_FOUND).send();
    })
    .catch((erro) => next(erro));
};

exports.Update = (req, res, next) => {
  const id = req.params.id;

  Colaboradores.findByPk(id)
    .then((colaborador) => {
      if (colaborador) {
        colaborador
          .update(
            {
              ...req.body,
            },
            {
              where: { id: id },
            }
          )
          .then(res.status(status.OK).send(colaborador));
      }
      res.status(status.NOT_FOUND).send();
    })
    .catch((erro) => next(erro));
};

exports.SearchAllColabEnvolvidos = (req, res, next) => {
  Colaboradores.findAll({ include: [{ model: EnvolvidosServicos, as: "colabs" }]})
    .then((colaborador) => {
      res.status(status.OK).send(colaborador);
    })
    .catch((erro) => next(erro));
};

exports.SearchOneColabEnvolvidos = (req, res, next) => {
  const id = req.params.id;

  Colaboradores.findByPk(id, { include: [{ model: EnvolvidosServicos, as: "colabs" }]})
    .then((colaborador) => {
      if (colaborador) {
        res.status(status.OK).send(colaborador);
      }
      res.status(status.NOT_FOUND).send();
    })
    .catch((erro) => next(erro));
};