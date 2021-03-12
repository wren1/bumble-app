'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(50)
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING.BINARY
    },
    username: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(30)
    },
    profilePic: {
      type: DataTypes.STRING(255)
    },
    banner: {
      type: DataTypes.STRING(255)
    },
    aboutTitle: {
      type: DataTypes.STRING(50)
    },
    aboutContent: {
      type: DataTypes.STRING(255)
    }
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Like, { foreignKey: 'userId' });
    User.hasMany(models.Follow, { foreignKey: 'followerId' });
    User.hasMany(models.Follow, { foreignKey: 'followerId' });
    User.hasMany(models.Comment, { foreignKey: 'userId' });
    User.hasMany(models.Post, { foreignKey: 'userId' });

    const columnMapping = {
      through: 'Reblog',
      otherKey: 'postId',
      foreignKey: 'userId'
    }
    User.belongsToMany(models.Post, columnMapping)
  };
  return User;
};