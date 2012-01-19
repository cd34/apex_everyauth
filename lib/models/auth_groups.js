/*
CREATE TABLE `auth_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
);
*/

module.exports = function(db, Sequelize) {

  return db.define('auth_groups', {
    'id' : { type: Sequelize.INTEGER, primaryKey: true},
    'name'    : Sequelize.STRING,
    'description'    : Sequelize.STRING,
  });

};
