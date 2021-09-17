'use strict';
module.exports = (sequelize, DataTypes) => {
  const Banner = sequelize.define('Banner', {
    sliderId : {
      type: DataTypes.INTEGER
    },
    filepath: {
      type: DataTypes.STRING,
      allowNull : false
    }
  }, {});
  Banner.associate = function(models) {
    // associations can be defined here
    Banner.belongsTo(models.Slider, { as: "slider", foreignKey: "sliderId", onDelete: "cascade"});
  };
  return Banner;
};