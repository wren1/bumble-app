'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Follows', [
      { followerId: 1, followedUserId: 2, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 1, followedUserId: 3, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 1, followedUserId: 4, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 1, followedUserId: 5, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 1, followedUserId: 6, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 1, followedUserId: 7, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 1, followedUserId: 8, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 1, followedUserId: 9, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 1, followedUserId: 10, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 1, followedUserId: 11, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 1, followedUserId: 12, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 1, followedUserId: 13, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 1, followedUserId: 14, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 1, followedUserId: 15, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 2, followedUserId: 1, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 2, followedUserId: 4, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 2, followedUserId: 5, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 2, followedUserId: 6, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 2, followedUserId: 7, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 2, followedUserId: 22, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 2, followedUserId: 23, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 2, followedUserId: 20, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 9, followedUserId: 1, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 9, followedUserId: 2, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 9, followedUserId: 3, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 9, followedUserId: 4, createdAt: new Date(), updatedAt: new Date() },
      
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Follows', null, {});
  }
};
