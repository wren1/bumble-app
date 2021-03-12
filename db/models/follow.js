'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define('Follow', {
    followerId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    followedUserId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  Follow.associate = function(models) {
    Follow.belongsTo(models.User, { foreignKey: 'followerId' });
    Follow.belongsTo(models.User, { foreignKey: 'followedUserId' });
  };
  return Follow;
};