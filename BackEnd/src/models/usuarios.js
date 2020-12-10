/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios', {
    idUsuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombres: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    apellidos: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    clave: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    correo: {
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
    tableName: 'usuarios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idUsuario" },
        ]
      },
      {
        name: "fk_usuario_estados1_idx",
        using: "BTREE",
        fields: [
          { name: "idEstado" },
        ]
      },
    ]
  });
};
