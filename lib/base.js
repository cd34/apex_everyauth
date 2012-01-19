var AuthID = db.import(__dirname + '/models/auth_id.js');
var AuthUsers = db.import(__dirname + '/models/auth_users.js');
var AuthAuthGroups = db.import(__dirname + '/models/auth_auth_groups.js');
var AuthGroups = db.import(__dirname + '/models/auth_groups.js');
var AuthUserGroups = db.import(__dirname + '/models/auth_user_groups.js');
var AuthUserLog = db.import(__dirname + '/models/auth_user_log.js');

AuthUsers.belongsTo(AuthID, {foreignKey: 'auth_id'} );
AuthID.hasMany(AuthUsers, {as: 'Users', foreignKey: 'auth_id'});
