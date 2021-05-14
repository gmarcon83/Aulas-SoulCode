const Cliente = require("../models/clientes");
const Equipamento = require("../models/equipamentos")
const status = require("http-status");

exports.Insert = (req, res, next) => {
  Cliente.create({
    ...req.body,
  })
    .then((cliente) => {
      if (cliente) {
        res.status(status.OK).send(cliente);
      } else {
        res.status(status.NOT_FOUND).send();
      }
    })
    .catch((erro) => {
      next(erro);
    });
};

exports.SearchAll = (req, res, next) => {
  Cliente.findAll()
    .then((cliente) => {
      res.status(status.OK).send(cliente);
    })
    .catch((erro) => next(erro));
};

exports.SearchAllEquipsClientes = (req, res, next) => {
  Cliente.findAll({ include: [{ model: Equipamento, as: "equip" }]})
    .then((cliente) => {
      res.status(status.OK).send(cliente);
    })
    .catch((erro) => next(erro));
};

exports.SearchOne = (req, res, next) => {
  const id = req.params.id;

  Cliente.findByPk(id)
    .then((cliente) => {
      if (cliente) {
        res.status(status.OK).send(cliente);
      }
      res.status(status.NOT_FOUND).send();
    })
    .catch((erro) => next(erro));
};

exports.Delete = (req, res, next) => {
  const id = req.params.id;

  Cliente.findByPk(id)
    .then((cliente) => {
      if (cliente) {
        cliente.destroy({
          where: { id: id },
        });
        res.status(status.OK).send("Cliente deletado.");
      }
      res.status(status.NOT_FOUND).send();
    })
    .catch((erro) => next(erro));
};

exports.Update = (req, res, next) => {
  const id = req.params.id;

  Cliente.findByPk(id)
    .then((cliente) => {
      if (cliente) {
        cliente
          .update(
            {
              ...req.body,
            },
            {
              where: { id: id },
            }
          )
          .then(res.status(status.OK).send(cliente));
      }
      res.status(status.NOT_FOUND).send();
    })
    .catch((erro) => next(erro));
};
