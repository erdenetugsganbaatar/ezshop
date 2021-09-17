'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Specials', [{
      name: "онцлох бараа 1",
      desc: "онцлох бараа 1",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "онцлох бараа 2",
      desc: "онцлох бараа 2",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "онцлох бараа 3",
      desc: "онцлох бараа 3",
      createdAt: new Date(),
      updatedAt: new Date(),
    },], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Specials', null, {});
  }
};
