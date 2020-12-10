/* jshint indent: 2 */

const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "redes",
    {
      idRed: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      imageLogo: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      idEstado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "estados",
          key: "idEstado",
        },
      },
    },
    {
      sequelize,
      tableName: "redes",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "idRed" }],
        },
        {
          name: "fk_redes_estados1_idx",
          using: "BTREE",
          fields: [{ name: "idEstado" }],
        },
      ],
    }
  );
};
