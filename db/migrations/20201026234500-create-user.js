'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(50)
      },
      password: {
        alowNull: false,
        type: Sequelize.STRING.BINARY
      },
      username: {
          allowNull: false,
          unique: true,
          type: Sequelize.STRING(25)
      },
      profilePic: {
        type: Sequelize.STRING(255)
      },
      banner: {
        type: Sequelize.STRING(255)
      },
      aboutTitle: {
        type: Sequelize.STRING(50)
      },
      aboutContent: {
        type: Sequelize.STRING(255)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};