/*
CREATE TABLE `auth_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `auth_id` int(11) DEFAULT NULL,
  `provider` varchar(80) DEFAULT NULL,
  `login` varchar(80) DEFAULT NULL,
  `salt` char(24) DEFAULT '',
  `password` varchar(80) DEFAULT NULL,
  `email` varchar(80) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `active` enum('Y','N','D') DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `providerlogin` (`provider`,`login`),
  KEY `ix_auth_users_auth_id` (`auth_id`),
  KEY `ix_auth_users_email` (`email`),
  KEY `ix_auth_users_login` (`login`)
);
*/

module.exports = function(db, Sequelize) {

  return db.define('auth_users', {
    'id' : { type: Sequelize.INTEGER, primaryKey: true},
    'auth_id' : { type: Sequelize.INTEGER},
    'provider'    : Sequelize.STRING,
    'login'    : Sequelize.STRING,
    'salt'    : Sequelize.STRING,
    'password'    : Sequelize.STRING,
    'email'    : Sequelize.STRING,
    'created'    : Sequelize.DATE,
    'active'    : Sequelize.STRING,
  }, { timestamps: false, freezeTableName: true,});

};
