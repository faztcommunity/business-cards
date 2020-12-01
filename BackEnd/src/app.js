require("dotenv").config();
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

// route middlewares

app.get("/", (req, res) => {
  res.json({
    estado: true,
    mensaje: "funciona!",
  });
});

module.exports = app;
