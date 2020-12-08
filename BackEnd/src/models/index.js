const dbConfig = require("../config/db.config");
const sequelizeModule = require("sequelize");
const sequelizeObj = new sequelizeModule(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  }
);

const db={};

db.sequelizeModule=sequelizeModule;
db.sequelizeObj=sequelizeObj;

db.usuario=require("../models/usuario")(sequelizeObj,sequelizeModule.DataTypes)
db.roles =require("../models/roles")(sequelizeObj,sequelizeModule.DataTypes)
db.rolesUsuario=require("../models/rolesusuario")(sequelizeObj,sequelizeModule.DataTypes)
db.tarjetas=require("../models/tarjetas")(sequelizeObj,sequelizeModule.DataTypes)
db.redes=require("../models/redes")(sequelizeObj,sequelizeModule.DataTypes)
db.infoTarjeta=require("../models/infotarjeta")(sequelizeObj,sequelizeModule.DataTypes)
db.redesTarjeta=require("../models/redestarjeta")(sequelizeObj,sequelizeModule.DataTypes)
db.estilos=require("../models/estilos")(sequelizeObj,sequelizeModule.DataTypes)


db.roles.belongsToMany(db.usuario, {
  through: "rolesusuario",
  foreignKey: "idRol",
  otherKey: "idUsuario"
});

db.usuario.belongsToMany(db.roles, {
  through: "rolesusuario",
  foreignKey: "idUsuario",
  otherKey: "idRol"
});



db.redesTarjeta.belongsTo(db.redes, { foreignKey: "idRed"});
db.redes.hasMany(db.redesTarjeta, { foreignKey: "idRed"});
db.redesTarjeta.belongsTo(db.tarjetas, { foreignKey: "idTarjeta"});
db.tarjetas.hasMany(db.redesTarjeta, { foreignKey: "idTarjeta"});
db.rolesUsuario.belongsTo(db.usuario, { foreignKey: "idUsuario"});
db.usuario.hasMany(db.rolesUsuario, { foreignKey: "idUsuario"});
db.rolesUsuario.belongsTo(db.roles, { foreignKey: "idRol"});
db.roles.hasMany(db.rolesUsuario, { foreignKey: "idRol"});
db.tarjetas.belongsTo(db.usuario, { foreignKey: "idUsuario"});
db.usuario.hasMany(db.tarjetas, { foreignKey: "idUsuario"});
db.tarjetas.belongsTo(db.estilos, { foreignKey: "idEstilo"});
db.estilos.hasMany(db.tarjetas, { foreignKey: "idEstilo"});
db.tarjetas.belongsTo(db.infoTarjeta, { foreignKey: "idInfoTarjeta"});
db.infoTarjeta.hasMany(db.tarjetas, { foreignKey: "idInfoTarjeta"});
db.ROLES =["usuario", "admin", "moderador"];

module.exports =db;

