'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Banners', [{
      filepath: "uploads/2021/8/banner-1630209499881.png",
      sliderId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      sliderId: 2,
      filepath: "uploads/2021/8/banner-1630206534470.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, 
    {
      sliderId: 2,
      filepath: "uploads/2021/8/banner-1630206534471.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Banners', null, {});
  }
};
