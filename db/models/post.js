'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    title: {
      type: DataTypes.STRING(255)
    },
    content: {
      type: DataTypes.TEXT
    },
    imgUrl: {
      type: DataTypes.STRING(255)
    }
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.User, { foreignKey: 'userId' });

    const columnMapping = {
      through: 'Reblog',
      otherKey: 'userId',
      foreignKey: 'postId'
    }
    Post.belongsToMany(models.User, columnMapping);
    Post.belongsTo(models.User, { foreignKey: 'userId' })
    Post.hasMany(models.Comment, { foreignKey: 'postId' });
    Post.hasMany(models.Like, { foreignKey: 'postId' });
    Post.hasMany(models.Tag, { foreignKey: 'postId' });
  };
  return Post;
};