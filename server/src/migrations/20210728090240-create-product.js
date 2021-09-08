'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      cost: {
        type: Sequelize.STRING
      },
      additional_info: {
        type: Sequelize.STRING
      },
      unit: {
        type: Sequelize.INTEGER
      },
      unit_type: {
        type: Sequelize.STRING
      },
      properties: {
        type: Sequelize.JSON
      },
      categoryId: {
        type: Sequelize.INTEGER,
        onDelete:"cascade",
        references: {
          model: "Categories",
          key: "id",
        }
      },
      filepath: {
        type:Sequelize.STRING,
      },
      brandId: {
        type:Sequelize.INTEGER,
        onDelete:"cascade",
        references: {
          model :"Brands",
          key:"id"
        }
      }
      ,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};