/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('infotarjeta', {
    idInfoTarjeta: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombreInfo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    cargo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    correo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    web: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    imageEmpresa: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'idUsuario'
      }
    }
  }, {
    sequelize,
    tableName: 'infotarjeta',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idInfoTarjeta" },
        ]
      },
      {
        name: "fk_infoTarjeta_usuarios1_idx",
        using: "BTREE",
        fields: [
          { name: "idUsuario" },
        ]
      },
    ]
  });
};
