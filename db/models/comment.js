'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    postId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    content: {
      allowNull: false,
      type: DataTypes.STRING(255)
    }
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.User, { foreignKey: 'userId' });
    Comment.belongsTo(models.Post, { foreignKey: 'postId' });
  };
  return Comment;
};