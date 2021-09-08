'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Brands', [{
      name: "nike", 
      desc: "just do it",
      filepath:"uploads/2021/9/image-1630814803603.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "new balance",
      desc: "new balance description",
      filepath: "uploads/2021/9/image-1630814861330.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Brands', null, {});
  }
};
