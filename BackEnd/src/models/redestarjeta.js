/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('redestarjeta', {
    idRedesTarjeta: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idRed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'redes',
        key: 'idRed'
      }
    },
    idTarjeta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tarjetas',
        key: 'idTarjeta'
      }
    },
    nombreUsuarioRed: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'redestarjeta',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idRedesTarjeta" },
        ]
      },
      {
        name: "fk_redesTarjeta_redes1_idx",
        using: "BTREE",
        fields: [
          { name: "idRed" },
        ]
      },
      {
        name: "fk_redesTarjeta_tarjetas1_idx",
        using: "BTREE",
        fields: [
          { name: "idTarjeta" },
        ]
      },
    ]
  });
};
