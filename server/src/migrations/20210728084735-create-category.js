'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
      },
      desc: {
        type: Sequelize.STRING
      },
      parentId: {
        type: Sequelize.INTEGER,
        onDelete: "cascade",
        references: {
          model: 'Categories',
          key: 'id'
        }
      },
      coverImagePath: {
        type: Sequelize.STRING
      },
      smallCategoryImagePath: {
        type: Sequelize.STRING
      },
      backgroundColor: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Categories');
  }
};