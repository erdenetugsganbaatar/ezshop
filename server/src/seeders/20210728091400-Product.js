'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      name: "product1",
      cost: "2000₮",
      additional_info: "additional info 1",
      unit: 5,
      brandId: 1,
      unit_type: "ш",
      filepath: "uploads/2021/9/productImage-1630895865061.png",
      properties: JSON.stringify(
        { өнгө: "ногоон", размер: "XL" }
      ), categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "product2",
      cost: "3000₮",
      additional_info: "additional info 2",
      unit: 5,
      brandId: 1,
      filepath: "uploads/2021/9/productImage-1630895865061.png",
      unit_type: "ш",
      properties: JSON.stringify(
        { өнгө: "ногоон", размер: "XL" }
      ), categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "product3",
      cost: "3000₮",
      filepath: "uploads/2021/9/productImage-1630895865061.png",
      additional_info: "additional info 3",
      unit: 5,
      brandId: 1,
      unit_type: "ш",
      properties: JSON.stringify(
        { өнгө: "ногоон", размер: "XL" }
      ), categoryId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "product4",
      cost: "2000₮",
      additional_info: "additional info 1",
      unit: 5,
      brandId: 1,
      unit_type: "ш",
      filepath: "uploads/2021/9/productImage-1630895865061.png",
      properties: JSON.stringify(
        { өнгө: "ногоон", размер: "XL" }
      ), categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "product5",
      cost: "3000₮",
      additional_info: "additional info 2",
      unit: 5,
      brandId: 1,
      filepath: "uploads/2021/9/productImage-1630895865061.png",
      unit_type: "ш",
      properties: JSON.stringify(
        { өнгө: "ногоон", размер: "XL" }
      ), categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "product6",
      cost: "3000₮",
      filepath: "uploads/2021/9/productImage-1630895865061.png",
      additional_info: "additional info 3",
      unit: 5,
      brandId: 1,
      unit_type: "ш",
      properties: JSON.stringify(
        { өнгө: "ногоон", размер: "XL" }
      ), categoryId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "product1",
      cost: "2000₮",
      additional_info: "additional info 1",
      unit: 5,
      brandId: 2,
      unit_type: "ш",
      filepath: "uploads/2021/9/productImage-1630895865061.png",
      properties: JSON.stringify(
        { өнгө: "ногоон", размер: "XL" }
      ), categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "product2",
      cost: "3000₮",
      additional_info: "additional info 2",
      unit: 5,
      brandId: 2,
      filepath: "uploads/2021/9/productImage-1630895865061.png",
      unit_type: "ш",
      properties: JSON.stringify(
        { өнгө: "ногоон", размер: "XL" }
      ), categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "product3",
      cost: "3000₮",
      filepath: "uploads/2021/9/productImage-1630895865061.png",
      additional_info: "additional info 3",
      unit: 5,
      brandId: 2,
      unit_type: "ш",
      properties: JSON.stringify(
        { өнгө: "ногоон", размер: "XL" }
      ), categoryId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "product4",
      cost: "2000₮",
      additional_info: "additional info 1",
      unit: 5,
      brandId: 2,
      unit_type: "ш",
      filepath: "uploads/2021/9/productImage-1630895865061.png",
      properties: JSON.stringify(
        { өнгө: "ногоон", размер: "XL" }
      ), categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "product4",
      cost: "2000₮",
      additional_info: "additional info 1",
      unit: 5,
      brandId: 2,
      unit_type: "ш",
      filepath: "uploads/2021/9/productImage-1630895865061.png",
      properties: JSON.stringify(
        { өнгө: "ногоон", размер: "XL" }
      ), categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "product5",
      cost: "3000₮",
      additional_info: "additional info 2",
      unit: 5,
      brandId: 2,
      filepath: "uploads/2021/9/productImage-1630895865061.png",
      unit_type: "ш",
      properties: JSON.stringify(
        { өнгө: "ногоон", размер: "XL" }
      ), categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "product5",
      cost: "3000₮",
      additional_info: "additional info 2",
      unit: 5,
      brandId: 2,
      filepath: "uploads/2021/9/productImage-1630895865061.png",
      unit_type: "ш",
      properties: JSON.stringify(
        { өнгө: "ногоон", размер: "XL" }
      ), categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "product5",
      cost: "3000₮",
      additional_info: "additional info 2",
      unit: 5,
      brandId: 2,
      filepath: "uploads/2021/9/productImage-1630895865061.png",
      unit_type: "ш",
      properties: JSON.stringify(
        { өнгө: "ногоон", размер: "XL" }
      ), categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "product5",
      cost: "3000₮",
      additional_info: "additional info 2",
      unit: 5,
      brandId: 2,
      filepath: "uploads/2021/9/productImage-1630895865061.png",
      unit_type: "ш",
      properties: JSON.stringify(
        { өнгө: "ногоон", размер: "XL" }
      ), categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "product5",
      cost: "3000₮",
      additional_info: "additional info 2",
      unit: 5,
      brandId: 2,
      filepath: "uploads/2021/9/productImage-1630895865061.png",
      unit_type: "ш",
      properties: JSON.stringify(
        { өнгө: "ногоон", размер: "XL" }
      ), categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "product5",
      cost: "3000₮",
      additional_info: "additional info 2",
      unit: 5,
      brandId: 2,
      filepath: "uploads/2021/9/productImage-1630895865061.png",
      unit_type: "ш",
      properties: JSON.stringify(
        { өнгө: "ногоон", размер: "XL" }
      ), categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "product5",
      cost: "3000₮",
      additional_info: "additional info 2",
      unit: 5,
      brandId: 2,
      filepath: "uploads/2021/9/productImage-1630895865061.png",
      unit_type: "ш",
      properties: JSON.stringify(
        { өнгө: "ногоон", размер: "XL" }
      ), categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "product5",
      cost: "3000₮",
      additional_info: "additional info 2",
      unit: 5,
      brandId: 2,
      filepath: "uploads/2021/9/productImage-1630895865061.png",
      unit_type: "ш",
      properties: JSON.stringify(
        { өнгө: "ногоон", размер: "XL" }
      ), categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "product5",
      cost: "3000₮",
      additional_info: "additional info 2",
      unit: 5,
      brandId: 2,
      filepath: "uploads/2021/9/productImage-1630895865061.png",
      unit_type: "ш",
      properties: JSON.stringify(
        { өнгө: "ногоон", размер: "XL" }
      ), categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "product5",
      cost: "3000₮",
      additional_info: "additional info 2",
      unit: 5,
      brandId: 2,
      filepath: "uploads/2021/9/productImage-1630895865061.png",
      unit_type: "ш",
      properties: JSON.stringify(
        { өнгө: "ногоон", размер: "XL" }
      ), categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "product6",
      cost: "3000₮",
      filepath: "uploads/2021/9/productImage-1630895865061.png",
      additional_info: "additional info 3",
      unit: 5,
      brandId: 2,
      unit_type: "ш",
      properties: JSON.stringify(
        { өнгө: "ногоон", размер: "XL" }
      ), categoryId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
