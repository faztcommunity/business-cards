/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rolesusuario', {
    idRolesUsuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'idUsuario'
      }
    },
    idRol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'roles',
        key: 'idRol'
      }
    }
  }, {
    sequelize,
    tableName: 'rolesusuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idRolesUsuario" },
        ]
      },
      {
        name: "fk_rolesUsuario_usuario1_idx",
        using: "BTREE",
        fields: [
          { name: "idUsuario" },
        ]
      },
      {
        name: "fk_rolesUsuario_roles1_idx",
        using: "BTREE",
        fields: [
          { name: "idRol" },
        ]
      },
    ]
  });
};
