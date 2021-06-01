const EnvolvidosServicos = require("../models/envolvidosServicos");
const status = require("http-status");

exports.Insert = (req, res, next) => {
  EnvolvidosServicos.create({
    ...req.body,
  })
    .then((envServ) => {
      if (envServ) {
        res.status(status.OK).send(envServ);
      } else {
        res.status(status.NOT_FOUND).send();
      }
    })
    .catch((erro) => {
      next(erro);
    });
};

exports.SearchAll = (req, res, next) => {
  EnvolvidosServicos.findAll()
    .then((envServ) => {
      res.status(status.OK).send(envServ);
    })
    .catch((erro) => next(erro));
};

exports.SearchOne = (req, res, next) => {
  const id = req.params.id;

  EnvolvidosServicos.findByPk(id)
    .then((envServ) => {
      if (envServ) {
        res.status(status.OK).send(envServ);
      }
      res.status(status.NOT_FOUND).send();
    })
    .catch((erro) => next(erro));
};

exports.Delete = (req, res, next) => {
  const id = req.params.id;

  EnvolvidosServicos.findByPk(id)
    .then((envServ) => {
      if (envServ) {
        envServ.destroy({
          where: { id: id },
        });
        res.status(status.OK).send("Envolvidos Servicos deletados.");
      }
      res.status(status.NOT_FOUND).send();
    })
    .catch((erro) => next(erro));
};

exports.Update = (req, res, next) => {
  const id = req.params.id;

  EnvolvidosServicos.findByPk(id)
    .then((envServ) => {
      if (envServ) {
        envServ
          .update(
            {
              ...req.body,
            },
            {
              where: { id: id },
            }
          )
          .then(res.status(status.OK).send(envServ));
      }
      res.status(status.NOT_FOUND).send();
    })
    .catch((erro) => next(erro));
};
