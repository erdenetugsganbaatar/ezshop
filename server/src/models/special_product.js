'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Special_Product', {
    productId: DataTypes.INTEGER,
    specialId: DataTypes.INTEGER,
  }, {});
  Category.associate = function (models) {
  };
  return Category;
};