/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarjetas', {
    idTarjeta: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombreTarjeta: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    codigoQR: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'idUsuario'
      }
    },
    idEstilo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'estilos',
        key: 'idEstilo'
      }
    },
    idInfoTarjeta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'infotarjeta',
        key: 'idInfoTarjeta'
      }
    }
  }, {
    sequelize,
    tableName: 'tarjetas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idTarjeta" },
        ]
      },
      {
        name: "fk_tarjetas_usuario_idx",
        using: "BTREE",
        fields: [
          { name: "idUsuario" },
        ]
      },
      {
        name: "fk_tarjetas_estilos1_idx",
        using: "BTREE",
        fields: [
          { name: "idEstilo" },
        ]
      },
      {
        name: "fk_tarjetas_infoTarjeta1_idx",
        using: "BTREE",
        fields: [
          { name: "idInfoTarjeta" },
        ]
      },
    ]
  });
};
