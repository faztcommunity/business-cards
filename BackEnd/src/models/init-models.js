var DataTypes = require("sequelize").DataTypes;
var _estilos = require("./estilos");
var _infotarjeta = require("./infotarjeta");
var _redes = require("./redes");
var _redestarjeta = require("./redestarjeta");
var _roles = require("./roles");
var _rolesusuario = require("./rolesusuario");
var _tarjetas = require("./tarjetas");
var _usuario = require("./usuario");

function initModels(sequelize) {
  var estilos = _estilos(sequelize, DataTypes);
  var infotarjeta = _infotarjeta(sequelize, DataTypes);
  var redes = _redes(sequelize, DataTypes);
  var redestarjeta = _redestarjeta(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var rolesusuario = _rolesusuario(sequelize, DataTypes);
  var tarjetas = _tarjetas(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);

  redestarjeta.belongsTo(redes, { foreignKey: "idRed"});
  redes.hasMany(redestarjeta, { foreignKey: "idRed"});
  redestarjeta.belongsTo(tarjetas, { foreignKey: "idTarjeta"});
  tarjetas.hasMany(redestarjeta, { foreignKey: "idTarjeta"});
  rolesusuario.belongsTo(usuario, { foreignKey: "idUsuario"});
  usuario.hasMany(rolesusuario, { foreignKey: "idUsuario"});
  rolesusuario.belongsTo(roles, { foreignKey: "idRol"});
  roles.hasMany(rolesusuario, { foreignKey: "idRol"});
  tarjetas.belongsTo(usuario, { foreignKey: "idUsuario"});
  usuario.hasMany(tarjetas, { foreignKey: "idUsuario"});
  tarjetas.belongsTo(estilos, { foreignKey: "idEstilo"});
  estilos.hasMany(tarjetas, { foreignKey: "idEstilo"});
  tarjetas.belongsTo(infotarjeta, { foreignKey: "idInfoTarjeta"});
  infotarjeta.hasMany(tarjetas, { foreignKey: "idInfoTarjeta"});

  return {
    estilos,
    infotarjeta,
    redes,
    redestarjeta,
    roles,
    rolesusuario,
    tarjetas,
    usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
