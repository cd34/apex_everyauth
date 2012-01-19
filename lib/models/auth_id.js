/*
CREATE TABLE `auth_id` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `display_name` varchar(80) DEFAULT NULL,
  `active` enum('Y','N','D') DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
);
*/

module.exports = function(db, Sequelize) {

  return db.define('auth_id', {
    'id' : { type: Sequelize.INTEGER, primaryKey: true},
    'display_name'    : Sequelize.STRING,
    'active'    : Sequelize.STRING,
    'created'    : Sequelize.DATE,
  });

};
