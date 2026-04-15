const path = require('path');

module.exports = function(sequelize) {
  const AuthID = require(path.join(__dirname, 'models', 'auth_id.js'))(sequelize);
  const AuthUsers = require(path.join(__dirname, 'models', 'auth_users.js'))(sequelize);
  const AuthAuthGroups = require(path.join(__dirname, 'models', 'auth_auth_groups.js'))(sequelize);
  const AuthGroups = require(path.join(__dirname, 'models', 'auth_groups.js'))(sequelize);
  const AuthUserGroups = require(path.join(__dirname, 'models', 'auth_user_groups.js'))(sequelize);
  const AuthUserLog = require(path.join(__dirname, 'models', 'auth_user_log.js'))(sequelize);

  AuthUsers.belongsTo(AuthID, { foreignKey: 'auth_id' });
  AuthID.hasMany(AuthUsers, { as: 'Users', foreignKey: 'auth_id' });

  AuthAuthGroups.belongsTo(AuthID, { foreignKey: 'auth_id' });
  AuthAuthGroups.belongsTo(AuthGroups, { foreignKey: 'group_id' });
  AuthID.belongsToMany(AuthGroups, { through: AuthAuthGroups, foreignKey: 'auth_id', otherKey: 'group_id' });
  AuthGroups.belongsToMany(AuthID, { through: AuthAuthGroups, foreignKey: 'group_id', otherKey: 'auth_id' });

  AuthUserGroups.belongsTo(AuthUsers, { foreignKey: 'user_id' });
  AuthUserGroups.belongsTo(AuthGroups, { foreignKey: 'group_id' });
  AuthUsers.belongsToMany(AuthGroups, { through: AuthUserGroups, foreignKey: 'user_id', otherKey: 'group_id' });
  AuthGroups.belongsToMany(AuthUsers, { through: AuthUserGroups, foreignKey: 'group_id', otherKey: 'user_id' });

  AuthUserLog.belongsTo(AuthID, { foreignKey: 'auth_id' });
  AuthUserLog.belongsTo(AuthUsers, { foreignKey: 'user_id' });

  return {
    AuthID,
    AuthUsers,
    AuthAuthGroups,
    AuthGroups,
    AuthUserGroups,
    AuthUserLog,
  };
};
