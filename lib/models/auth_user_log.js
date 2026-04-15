const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  return sequelize.define('auth_user_log', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    auth_id: {
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    time: {
      type: DataTypes.DATE,
    },
    ip_addr: {
      type: DataTypes.STRING(39),
      allowNull: false,
    },
    event: {
      type: DataTypes.ENUM('L', 'R', 'P', 'F'),
    },
  }, {
    timestamps: false,
    freezeTableName: true,
    indexes: [
      { fields: ['auth_id'], name: 'ix_auth_user_log_auth_id' },
      { fields: ['user_id'], name: 'ix_auth_user_log_user_id' },
    ],
  });
};
