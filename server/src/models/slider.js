'use strict';
module.exports = (sequelize, DataTypes) => {
  const Slider = sequelize.define('Slider', {
    categoryId : {
      type: DataTypes.INTEGER
    }
  }, {});
  Slider.associate = function(models) {
    // associations can be defined here
    Slider.belongsTo(models.Category, { as: "category", foreignKey: "categoryId", onDelete: "cascade"});
    Slider.hasMany(models.Banner, {as : "banner"});
  };
  return Slider;
};