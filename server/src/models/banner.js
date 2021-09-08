'use strict';
module.exports = (sequelize, DataTypes) => {
  const Banner = sequelize.define('Banner', {
    categoryId : {
      type: DataTypes.INTEGER
    },
    filepath: {
      type: DataTypes.STRING,
      allowNull : false
    }
  }, {});
  Banner.associate = function(models) {
    // associations can be defined here
    Banner.belongsTo(models.Category, { as: "category", foreignKey: "categoryId", onDelete: "cascade"});
  };
  return Banner;
};