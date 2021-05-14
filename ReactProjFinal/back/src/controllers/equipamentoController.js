const Equipamentos = require("../models/equipamentos");
const status = require("http-status");

exports.Insert = (req, res, next) => {
  Equipamentos.create({
    ...req.body,
  })
    .then((equipamento) => {
      if (equipamento) {
        res.status(status.OK).send(equipamento);
      } else {
        res.status(status.NOT_FOUND).send();
      }
    })
    .catch((erro) => {
      next(erro);
    });
};

exports.SearchAll = (req, res, next) => {
  Equipamentos.findAll()
    .then((equipamento) => {
      res.status(status.OK).send(equipamento);
    })
    .catch((erro) => next(erro));
};

exports.SearchOne = (req, res, next) => {
  const id = req.params.id;

  Equipamentos.findByPk(id)
    .then((equipamento) => {
      if (equipamento) {
        res.status(status.OK).send(equipamento);
      }
      res.status(status.NOT_FOUND).send();
    })
    .catch((erro) => next(erro));
};

exports.Delete = (req, res, next) => {
  const id = req.params.id;

  Equipamentos.findByPk(id)
    .then((equipamento) => {
      if (equipamento) {
        equipamento.destroy({
          where: { id: id },
        });
        res.status(status.OK).send("Equipamento deletado.");
      }
      res.status(status.NOT_FOUND).send();
    })
    .catch((erro) => next(erro));
};

exports.Update = (req, res, next) => {
  const id = req.params.id;

  Equipamentos.findByPk(id)
    .then((equipamento) => {
      if (equipamento) {
        equipamento
          .update(
            {
              ...req.body,
            },
            {
              where: { id: id },
            }
          )
          .then(res.status(status.OK).send(equipamento));
      }
      res.status(status.NOT_FOUND).send();
    })
    .catch((erro) => next(erro));
};
