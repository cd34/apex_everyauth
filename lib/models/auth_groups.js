const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  return sequelize.define('auth_groups', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(80),
      unique: true,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
