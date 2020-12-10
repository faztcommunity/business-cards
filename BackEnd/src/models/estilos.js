/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estilos', {
    idEstilo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombreEstilo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    plantilla: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    idEstado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'estados',
        key: 'idEstado'
      }
    }
  }, {
    sequelize,
    tableName: 'estilos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idEstilo" },
        ]
      },
      {
        name: "fk_estilos_estados1_idx",
        using: "BTREE",
        fields: [{ name: "idEstado" }],
      },
    ]
  });
};
