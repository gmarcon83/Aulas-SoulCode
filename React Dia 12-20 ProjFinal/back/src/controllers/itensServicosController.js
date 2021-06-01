const ItensServicos = require("../models/itensServicos");
const status = require("http-status");

exports.Insert = (req, res, next) => {
  ItensServicos.create({
    ...req.body,
  })
    .then((itensServ) => {
      if (itensServ) {
        res.status(status.OK).send(itensServ);
      } else {
        res.status(status.NOT_FOUND).send();
      }
    })
    .catch((erro) => {
      next(erro);
    });
};

exports.SearchAll = (req, res, next) => {
  ItensServicos.findAll()
    .then((itensServ) => {
      res.status(status.OK).send(itensServ);
    })
    .catch((erro) => next(erro));
};

exports.SearchOne = (req, res, next) => {
  const id = req.params.id;

  ItensServicos.findByPk(id)
    .then((itensServ) => {
      if (itensServ) {
        res.status(status.OK).send(itensServ);
      }
      res.status(status.NOT_FOUND).send();
    })
    .catch((erro) => next(erro));
};

exports.Delete = (req, res, next) => {
  const id = req.params.id;

  ItensServicos.findByPk(id)
    .then((itensServ) => {
      if (itensServ) {
        itensServ.destroy({
          where: { id: id },
        });
        res.status(status.OK).send("Item servico deletado.");
      }
      res.status(status.NOT_FOUND).send();
    })
    .catch((erro) => next(erro));
};

exports.Update = (req, res, next) => {
  const id = req.params.id;

  ItensServicos.findByPk(id)
    .then((itensServ) => {
      if (itensServ) {
        itensServ
          .update(
            {
              ...req.body,
            },
            {
              where: { id: id },
            }
          )
          .then(res.status(status.OK).send(itensServ));
      }
      res.status(status.NOT_FOUND).send();
    })
    .catch((erro) => next(erro));
};
