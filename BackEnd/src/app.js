require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const cors = require("cors");

import authRoute from "./routes/auth.route";
import usuarioRoute from "./routes/usuario.route";
import redesRoute from "./routes/redes.route";

const app = express();

// settings
app.set("PORT", process.env.PORT || 3000);

// import routes
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(morgan("dev"));

const db = require("./models/index");
const role = db.roles;
const estados = db.estados;

//Lo comente para que no se hiciera en todo momento y le cambie de orden
/*db.sequelizeObj.sync({ force: true }).then(() => {
  console.log("Reiniciando la db, creando roles y estados");
  definiendoEstados();
  definirRoles();
});*/

function definiendoEstados() {
  estados.create({
    idEstado: 1,
    nombre: "Activo",
  });

  estados.create({
    idEstado: 2,
    nombre: "Inactivo",
  });
}

function definirRoles() {
  role.create({
    idRol: 1,
    nombreRol: "user",
    idEstado: 1,
  });

  role.create({
    idRol: 2,
    nombreRol: "moderador",
    idEstado: 1,
  });

  role.create({
    idRol: 3,
    nombreRol: "admin",
    idEstado: 1,
  });
}

// route middlewares
app.get("/", (req, res) => {
  res.json({
    estado: true,
    mensaje: "funciona!",
  });
});

app.use("/api/auth", authRoute);
app.use("/api/accesos", usuarioRoute);

//Rutas [redes]

app.use("/api/redes", redesRoute);

module.exports = app;
