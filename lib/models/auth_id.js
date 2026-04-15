const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  return sequelize.define('auth_id', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    display_name: {
      type: DataTypes.STRING(80),
    },
    active: {
      type: DataTypes.ENUM('Y', 'N', 'D'),
    },
    created: {
      type: DataTypes.DATE,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
