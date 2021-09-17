'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('Special_Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      specialId: {
        type:Sequelize.INTEGER,
        onDelete:"cascade",
        references: {
          model :"Specials",
          key:"id"
        }
      },
      productId: {
        type:Sequelize.INTEGER,
        onDelete:"cascade",
        references: {
          model :"Products",
          key:"id"
        }
      },
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

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('Special_Products');

  }
};
