const db = require("../models/index");
const redes = db.redes;

// GET
exports.findAll = async (req, res) => {
  await redes
    .findAll()
    .then((data) => {
      let resData = {
        error: false,
        codError: 1,
        msg: "solicitud procesada",
        data: data,
      };

      res.send(resData);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

//GET id
exports.findOne = async (req, res) => {
  let id = req.params.id;

  redes
    .findByPk(id)
    .then((data) => {
      let resData = {
        error: false,
        msg: "solicitud procesada",
        data: data,
      };

      res.send(resData);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving with id=" + id,
      });
    });
};

//POST create
exports.create = async (req, res) => {
  //validando
  let redSocial = {
    nombre: req.body.nombre,
    imageLogo: req.body.imageLogo,
    idEstado: req.body.idEstado,
  };

  redes
    .create(redSocial)
    .then((data) => {
      let resData = {
        error: false,
        msg: "solicitud procesada",
        data: data,
      };

      res.send(resData);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.update = async (req, res) => {
  const id = req.params.id;

  await redes
    .update(req.body, {
      where: { idRed: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Actualizado",
        });
      } else {
        res.send({
          message: `no se pudo actualizar red con id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "error con id=" + id + ", error: " + err.message,
      });
    });
};

exports.delete = async (req, res) => {
  const id = req.params.id;

  await redes
    .update(
      {
        idEstado: 2,
      },
      {
        where: { idRed: id },
      }
    )
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "eliminado",
        });
      } else {
        res.send({
          message: `no se pudo eliminar red con id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "error con id=" + id + ", error: " + err.message,
      });
    });
};
