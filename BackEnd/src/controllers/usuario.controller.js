const db = require("../models");
const usuario = db.usuario;
const bcrypt = require("bcryptjs");
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
    .then(usuario => {
      res.json(usuario);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error al obtener usuario con id" + idUsuario });
    });
};

export const eliminarUsuario = (req, res) => {
  const id = req.params.id;

  usuario
    .destroy({
      where: { idUsuario: id }
    })
    .then(numRegistro => {
      if (numRegistro == 1) {
        res.json({ message: "Usuario elimindo" });
      } else {
        res.status(404).send({ message: "Usuario no encontrado" });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

export const actualizarClave = async (req, res) => {
  for (let index = 0; index < 20; index++) {
    console.log("el elemento" + index);
  }

  const clave = req.body.clave;

  const claveNueva = req.body.claveNueva;
  const id = req.params.id;

  await usuario
    .findByPk(id)
    .then(usuario => {
      if (!usuario) {
        return res.status(404).send({ message: "Usuario  invalido" });
      }

      const passwordIsValid = bcrypt.compareSync(req.body.clave, usuario.clave);

      if (passwordIsValid) {
        usuario
          .update(
            { clave: bcrypt.hashSync(claveNueva) },
            {
              where: { idUsuario: id },
              returning: true,
              plain: true
            }
          )
          .then(claveModificada => {

            if (claveModificada) {
              res.send({ message: "Contraseña modificada" });
            } else {
              res.send({ message: "No se pudo actualizar la contraseña" });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Erro an intentar modificar la contraseña" + err.message
            });
          });
      } else {
        res.send({ message: "Clave proporcionada es invalida" });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
