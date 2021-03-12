'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reblogs', [
      { userId: 2, postId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, postId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 4, postId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 11, postId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 12, postId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 13, postId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 14, postId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, postId: 14, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, postId: 14, createdAt: new Date(), updatedAt: new Date() },
      { userId: 4, postId: 15, createdAt: new Date(), updatedAt: new Date() },
      { userId: 5, postId: 16, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, postId: 17, createdAt: new Date(), updatedAt: new Date() },
      { userId: 7, postId: 18, createdAt: new Date(), updatedAt: new Date() },
      { userId: 8, postId: 19, createdAt: new Date(), updatedAt: new Date() },
      { userId: 9, postId: 20, createdAt: new Date(), updatedAt: new Date() },
      { userId: 10, postId: 11, createdAt: new Date(), updatedAt: new Date() },
      { userId: 11, postId: 12, createdAt: new Date(), updatedAt: new Date() },
      { userId: 12, postId: 13, createdAt: new Date(), updatedAt: new Date() },
      { userId: 13, postId: 14, createdAt: new Date(), updatedAt: new Date() },
      { userId: 14, postId: 15, createdAt: new Date(), updatedAt: new Date() },
      { userId: 15, postId: 16, createdAt: new Date(), updatedAt: new Date() },
      { userId: 16, postId: 17, createdAt: new Date(), updatedAt: new Date() },
      { userId: 17, postId: 18, createdAt: new Date(), updatedAt: new Date() },{ userId: 1, postId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 18, postId: 19, createdAt: new Date(), updatedAt: new Date() },
      { userId: 19, postId: 11, createdAt: new Date(), updatedAt: new Date() },
      { userId: 20, postId: 12, createdAt: new Date(), updatedAt: new Date() },
      { userId: 21, postId: 13, createdAt: new Date(), updatedAt: new Date() },
      { userId: 22, postId: 14, createdAt: new Date(), updatedAt: new Date() },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reblogs', null, {});
  }
};
