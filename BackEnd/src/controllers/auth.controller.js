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



export const signIn = (req, res) => {
  Usuario.findOne({
    where: {
      correo: req.body.correo
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "Usuario no encontrado." });
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.clave,
        user.clave
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Contraseña invalida"
        });
      }

      const token = jwt.sign({ id: user.idUsuario }, config.secret, {
        expiresIn: 86400 // 24 horas
      });

      const authorities = [];

      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].nombreRol.toUpperCase());
        }
        res.status(200).send({
          id: user.idUsuario,
          correo: user.correo,
          roles: authorities,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};