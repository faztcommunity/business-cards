const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../models");
const Usuario = db.usuario;

export  const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "token no recivido"
    });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(400).send({
        message: "No autorizado"
      });
    }
    req.userId = decoded.id;
    next();
  });
};

export const isAdmin = (req, res, next) => {
  Usuario.findByPk(1).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].nombreRol === "admin") {
          next();
          return;
        }
      }
      res.status(403).send({
        message: "Rol de administrador necesario"
      });
      return;
    });
  });
};
/*
const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin
};

module.exports = authJwt;
*/