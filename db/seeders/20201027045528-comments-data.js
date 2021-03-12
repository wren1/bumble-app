'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      { userId: 1, postId: 2, content: 'what does that mean???', createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, postId: 1, content: 'hello friend', createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, postId: 4, content: 'follow me pls', createdAt: new Date(), updatedAt: new Date() },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
