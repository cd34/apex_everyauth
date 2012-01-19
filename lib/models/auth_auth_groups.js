/*
CREATE TABLE `auth_auth_groups` (
  `auth_id` int(11) DEFAULT NULL,
  `group_id` int(11) DEFAULT NULL,
  KEY `auth_id` (`auth_id`),
  KEY `group_id` (`group_id`)
);
*/

module.exports = function(db, Sequelize) {

  return db.define('auth_auth_groups', {
    'auth_id' : { type: Sequelize.INTEGER},
    'group_id' : { type: Sequelize.INTEGER},
  }, { timestamps: false, freezeTableName: true,});

};
