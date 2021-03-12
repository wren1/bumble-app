'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tags', [
      { description: 'word', postId: 1, createdAt: new Date(), updatedAt: new Date() },
      { description: 'tag', postId: 1, createdAt: new Date(), updatedAt: new Date() },
      { description: 'dog', postId: 11, createdAt: new Date(), updatedAt: new Date() },
      { description: 'animals', postId: 11, createdAt: new Date(), updatedAt: new Date() },
      { description: 'movie', postId: 15, createdAt: new Date(), updatedAt: new Date() },
      { description: 'pretty', postId: 13, createdAt: new Date(), updatedAt: new Date() },
      { description: 'word', postId: 3, createdAt: new Date(), updatedAt: new Date() },
      { description: 'dog', postId: 13, createdAt: new Date(), updatedAt: new Date() },
      { description: 'animals', postId: 13, createdAt: new Date(), updatedAt: new Date() },
      { description: 'movie', postId: 17, createdAt: new Date(), updatedAt: new Date() },
      { description: 'text', postId: 7, createdAt: new Date(), updatedAt: new Date() },
      { description: 'image', postId: 14, createdAt: new Date(), updatedAt: new Date() },
      { description: 'image', postId: 15, createdAt: new Date(), updatedAt: new Date() },
      { description: 'text', postId: 2, createdAt: new Date(), updatedAt: new Date() },
      { description: 'animals', postId: 14, createdAt: new Date(), updatedAt: new Date() },
      { description: 'animals', postId: 15, createdAt: new Date(), updatedAt: new Date() },
      { description: 'dog', postId: 14, createdAt: new Date(), updatedAt: new Date() },
      { description: 'cat', postId: 15, createdAt: new Date(), updatedAt: new Date() },
      { description: 'cat', postId: 16, createdAt: new Date(), updatedAt: new Date() },
      { description: 'movie', postId: 19, createdAt: new Date(), updatedAt: new Date() },
      { description: 'dog', postId: 17, createdAt: new Date(), updatedAt: new Date() },
      { description: 'text', postId: 3, createdAt: new Date(), updatedAt: new Date() },
      { description: 'word', postId: 4, createdAt: new Date(), updatedAt: new Date() },
      { description: 'animals', postId: 15, createdAt: new Date(), updatedAt: new Date() },
      { description: 'animals', postId: 16, createdAt: new Date(), updatedAt: new Date() },
      { description: 'food', postId: 20, createdAt: new Date(), updatedAt: new Date() },
      { description: 'animals', postId: 18, createdAt: new Date(), updatedAt: new Date() },
      { description: 'animals', postId: 21, createdAt: new Date(), updatedAt: new Date() },
      { description: 'tag', postId: 5, createdAt: new Date(), updatedAt: new Date() },
      { description: 'food', postId: 23, createdAt: new Date(), updatedAt: new Date() },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tags', null, {});
  }
};
