'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    postId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  Like.associate = function(models) {
    Like.belongsTo(models.Post, { foreignKey: 'postId' });
    Like.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Like;
};