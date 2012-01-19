/*
CREATE TABLE `auth_user_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `auth_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `ip_addr` varchar(39) NOT NULL,
  `event` enum('L','R','P','F') DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ix_auth_user_log_auth_id` (`auth_id`),
  KEY `ix_auth_user_log_user_id` (`user_id`)
)
*/

module.exports = function(db, Sequelize) {

  return db.define('auth_user_log', {
    'id' : { type: Sequelize.INTEGER, primaryKey: true},
    'auth_id' : { type: Sequelize.INTEGER},
    'user_id' : { type: Sequelize.INTEGER},
    'time'    : Sequelize.DATE,
    'ip_addr'    : Sequelize.STRING,
    'event'    : Sequelize.STRING,
  });

};
