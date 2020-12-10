const db = require("../models");
const usuario = db.usuarios;

export const allAccess = (req, res) => {
  res.status(200).send("Conteniod publico.");
};

export const menuUsuario = (req, res) => {
  res.status(200).send("Contenido usuario.");
};

export const menuAdmin = (req, res) => {
  res.status(200).send("Contenido admin.");
};

export const menuModerador = (req, res) => {
  res.status(200).send("Contenido moderador.");
};

export const obtenerUsuarioById = (req, res) => {
  const idUsuario = req.params.id;
  usuario
    .findByPk(idUsuario)
    .then((usuario) => {
      res.json(usuario);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error al obtener usuario con id" + idUsuario });
    });
};

export const eliminarUsuario = (req, res) => {
  const id = req.params.id;

  usuario
    .destroy({
      where: { idUsuario: id },
    })
    .then((numRegistro) => {
      if (numRegistro == 1) {
        res.json({ message: "Usuario elimindo" });
      } else {
        res.status(404).send({ message: "Usuario no encontrado" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
