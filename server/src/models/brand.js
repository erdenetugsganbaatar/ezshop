'use strict';
module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define('Brand', {
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    filepath: {
      type: DataTypes.STRING,
      allowNull:false
    },
    desc: DataTypes.STRING,
  }, {});
  Brand.associate = function(models) {
    Brand.hasMany(models.Product, {foreignKey: "brandId"})
  };
  return Brand;
};