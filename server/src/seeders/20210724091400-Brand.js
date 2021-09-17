'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Brands', [{
      name: "nike",
      desc: "just do it",
      filepath: "uploads/2021/9/image-1630814803603.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "new balance",
      desc: "new balance description",
      filepath: "uploads/2021/9/image-1630814861330.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "brand #3",
      desc: "brand #3 desc",
      filepath: "uploads/2021/9/image-1630814861330.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "brand #4",
      desc: "brand #4 desc",
      filepath: "uploads/2021/9/image-1630814861330.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "brand #5",
      desc: "brand #5 desc",
      filepath: "uploads/2021/9/image-1630814861330.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "brand #6",
      desc: "brand #6 desc",
      filepath: "uploads/2021/9/image-1630814861330.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "brand #7",
      desc: "brand #7 desc",
      filepath: "uploads/2021/9/image-1630814861330.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "brand #8",
      desc: "brand #8 desc",
      filepath: "uploads/2021/9/image-1630814861330.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "brand #9",
      desc: "brand #9 desc",
      filepath: "uploads/2021/9/image-1630814861330.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "brand #10",
      desc: "brand #10 desc",
      filepath: "uploads/2021/9/image-1630814861330.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Brands', null, {});
  }
};
