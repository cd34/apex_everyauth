const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  return sequelize.define('auth_user_groups', {
    user_id: {
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
