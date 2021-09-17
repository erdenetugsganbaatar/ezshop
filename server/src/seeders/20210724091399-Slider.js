'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Sliders', [{
      categoryId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      categoryId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      categoryId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      categoryId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Banners', null, {});
  }
};
