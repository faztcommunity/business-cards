/* jshint indent: 2 */

const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "roles",
    {
      idRol: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nombreRol: {
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
      tableName: "roles",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "idRol" }],
        },
        {
          name: "fk_roles_estados1_idx",
          using: "BTREE",
          fields: [{ name: "idEstado" }],
        },
      ],
    }
  );
};
