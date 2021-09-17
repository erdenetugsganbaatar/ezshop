'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Special', {
    name: DataTypes.STRING,
    desc: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
  }, {});
  Category.associate = function (models) {
    Category.belongsTo(models.Category, {as: "category", foreignKey: "categoryId"})
    Category.belongsToMany(models.Product, {through: "Special_Product"});
  };
  return Category;
};