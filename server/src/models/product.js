'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    cost: DataTypes.STRING,
    additional_info: DataTypes.STRING,
    unit: DataTypes.INTEGER,
    unit_type: DataTypes.STRING,
    properties: DataTypes.JSON,
    categoryId: DataTypes.INTEGER,
    filepath : DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    Product.belongsTo(models.Category, {as : "category", foreignKey : "categoryId", onDelete : "cascade"});
    Product.belongsTo(models.Brand, { as: "brand", foreignKey: "brandId", onDelete: 'cascade' });
  };
  return Product;
};

