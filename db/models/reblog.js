'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reblog = sequelize.define('Reblog', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    postId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  Reblog.associate = function(models) {
    // Reblog.belongsTo(models.User, { foreignKey: 'userId' })
    // Reblog.belongsTo(models.Post, { foreignKey: 'postId' })
  };
  return Reblog;
};