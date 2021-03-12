'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    description: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    postId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  Tag.associate = function(models) {
    Tag.belongsTo(models.Post, { foreignKey: 'postId' })
  };
  return Tag;
};