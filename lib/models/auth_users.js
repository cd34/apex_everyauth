const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  return sequelize.define('auth_users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    auth_id: {
      type: DataTypes.INTEGER,
    },
    provider: {
      type: DataTypes.STRING(80),
    },
    login: {
      type: DataTypes.STRING(80),
    },
    salt: {
      type: DataTypes.CHAR(24),
      defaultValue: '',
    },
    password: {
      type: DataTypes.STRING(80),
    },
    email: {
      type: DataTypes.STRING(80),
    },
    created: {
      type: DataTypes.DATE,
    },
    active: {
      type: DataTypes.ENUM('Y', 'N', 'D'),
    },
  }, {
    timestamps: false,
    freezeTableName: true,
    indexes: [
      { unique: true, fields: ['provider', 'login'], name: 'providerlogin' },
      { fields: ['auth_id'], name: 'ix_auth_users_auth_id' },
      { fields: ['email'], name: 'ix_auth_users_email' },
      { fields: ['login'], name: 'ix_auth_users_login' },
    ],
  });
};
