const db = require("../models");
const ROLES = db.ROLES;
const usuario = db.usuario;
const validarEmailExiste = (req, res, next) => {
  usuario
    .findOne({
      where: {
        correo: req.body.correo
      }
    })
    .then(usuario => {
      if (usuario) {
        res.status(400).send({
          message: "Ese correo ya existe en la base de datos !"
        });
        return;
      }

      next();
    });
};

const verificarRolExiste = (req, res, next) => {
  if (req.body.rol) {
    for (let i = 0; i < req.body.rol.length; i++) {
      if (!ROLES.includes(req.body.rol[i])) {
        res.status(400).json({
          message: "Rol proporcionado es invalido " + req.body.rol[i]
        });
        return;
      }
    }
  }
  next();
};

export { validarEmailExiste, verificarRolExiste };
