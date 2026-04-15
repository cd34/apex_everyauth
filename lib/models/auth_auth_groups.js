const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  return sequelize.define('auth_auth_groups', {
    auth_id: {
      type: DataTypes.INTEGER,
    },
    group_id: {
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
