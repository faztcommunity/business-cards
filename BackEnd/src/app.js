require("dotenv").config();
import authRoute from "./routes/auth.route";
import usuarioRoute from "./routes/usuario.route";
const express = require("express");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express();

// settings
app.set("PORT", process.env.PORT || 3000);

// import routes
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(morgan("dev"));

const db = require("./models/index");
const Role = db.roles;

db.sequelizeObj.sync({ force: !true }).then(() => {
  console.log("Reiniciando la db y creando roles");
});
definirRoles();

function definirRoles() {
  Role.create({
    idRol: 1,
    nombreRol: "usuario"
  });

  Role.create({
    idRol: 2,
    nombreRol: "moderador"
  });

  Role.create({
    idRol: 3,
    nombreRol: "admin"
  });
}

// route middlewares

app.get("/", (req, res) => {
  res.json({
    estado: true,
    mensaje: "funciona!"
  });
});
app.use("/api/auth", authRoute);
app.use("/api/accesos", usuarioRoute);

module.exports = app;
