'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Likes', [
      { postId: 2, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { postId: 3, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { postId: 4, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { postId: 5, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { postId: 6, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { postId: 1, userId: 2, createdAt: new Date(), updatedAt: new Date() },
      { postId: 7, userId: 2, createdAt: new Date(), updatedAt: new Date() },
      { postId: 9, userId: 2, createdAt: new Date(), updatedAt: new Date() },
      { postId: 12, userId: 2, createdAt: new Date(), updatedAt: new Date() },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Likes', null, {});
  }
};
