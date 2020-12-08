const db = require("../models");
const config = require("../config/auth.config");
const Usuario = db.usuario
const rol = db.roles;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

export const singUp = (req, res) => {
  const { nombres, apellidos, usuario, clave, correo } = req.body;

  //Guardando el usuario
  Usuario.create({
      nombres,
      apellidos,
      usuario,
      clave:bcrypt.hashSync(clave, 10),
      correo 
    })
    .then(usuario => {
      if (req.body.rol) {
        rol
          .findAll({
            where: {
              nombreRol: req.body.rol
            }
          })
          .then(rol => {
            usuario.setRoles(rol).then(() => {
              res.json({ message: "Usuario registrado correctamente" });
            });
          });
      } else {
        //definiendo  un rol por defecto
        res.json({ message: "Usuariio registrado con rol por defecto : 1" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
};
