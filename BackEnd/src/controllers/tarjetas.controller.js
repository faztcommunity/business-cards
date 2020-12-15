const db = require("../models/index");
const tarjetas = db.tarjetas;
const infoTarjeta = db.infoTarjeta;
const redesTarjeta = db.redesTarjeta;

exports.findAll = async (req, res) => {};

exports.findOne = async (req, res) => {};

exports.create = async (req, res) => {
  //console.log(req.body);

  let infoTarjetaBody = req.body.infoTarjeta;
  var tarjetaBody;

  if (infoTarjetaBody.idInfoTarjeta == undefined) {
    infoTarjetaBody.idUsuario = req.body.idUsuario;

    //console.log(infoTarjetaBody);

    await infoTarjeta.create(infoTarjetaBody).then((data) => {
      //console.log(data.idInfoTarjeta);
      if (data.idInfoTarjeta) {
        infoTarjetaBody.idInfoTarjeta = data.idInfoTarjeta;
      }
    });
  }

  let tarjetaGenerada;

  tarjetaBody = {
    nombreTarjeta: req.body.nombreTarjeta,
    description: req.body.description,
    idUsuario: req.body.idUsuario,
    idEstilo: req.body.idEstilo,
    idInfoTarjeta: infoTarjetaBody.idInfoTarjeta,
    idEstado: 1,
  };

  var idTarjetaInfoGenerated;

  await tarjetas.create(tarjetaBody).then((data) => {
    tarjetaGenerada = data;
    if (data) {
      idTarjetaInfoGenerated = data.idTarjeta;
    }
  });

  console.log(idTarjetaInfoGenerated);

  for (const item in req.body.redesTarjeta) {
    let values = {
      item: req.body.redesTarjeta[item],
    };

    values.item.idTarjeta = idTarjetaInfoGenerated;

    redesTarjeta.create(values.item).then((data) => {
      console.log("redes guardadas");
    });
  }

  await res.send(tarjetaGenerada);
};

exports.update = async (req, res) => {};

exports.delete = async (req, res) => {};
