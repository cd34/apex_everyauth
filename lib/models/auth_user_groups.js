/*
CREATE TABLE `auth_user_groups` (
  `user_id` int(11) DEFAULT NULL,
  `group_id` int(11) DEFAULT NULL,
  KEY `user_id` (`user_id`),
  KEY `group_id` (`group_id`)
)
*/

module.exports = function(db, Sequelize) {

  return db.define('auth_user_groups', {
    'user_id' : { type: Sequelize.INTEGER},
    'group_id' : { type: Sequelize.INTEGER},
  });

};
