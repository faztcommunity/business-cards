const db = require("../models/index");
const tarjetas = db.tarjetas;
const infoTarjeta = db.infoTarjeta;

exports.findAll = async (req, res) => {};

exports.findOne = async (req, res) => {};

exports.create = async (req, res) => {
  let infoTarjetaBody = req.body.infoTarjeta;

  infoTarjeta.create(infoTarjetaBody).then((data) => {
    console.log(data);

    if(data){
      
    }

  });

  await res.send(req.body);
};

exports.update = async (req, res) => {};

exports.delete = async (req, res) => {};
