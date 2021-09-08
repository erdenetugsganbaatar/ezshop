'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    desc: DataTypes.STRING,
    parentId: DataTypes.INTEGER,
    coverImagePath: DataTypes.STRING,
    smallCategoryImagePath: DataTypes.STRING,
    backgroundColor: DataTypes.STRING 
  }, {});
  Category.associate = function (models) {
    Category.hasMany(models.Category, { as: "subCategory", foreignKey: "parentId", onDelete: "cascade" });
    Category.belongsTo(models.Category, {as: "parent", foreignKey: "parentId"})
    Category.hasMany(models.Product, { as: "products" });
  };
  return Category;
};