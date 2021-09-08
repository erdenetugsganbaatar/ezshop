

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    'Customer',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
      },
      profilePic: {
        type: DataTypes.STRING,
        defaultValue:null
      },
      verifyToken: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      defaultScope: {
        attributes: { exclude: ['password', 'verifyToken'] },
      },
      scopes: {
        withSecretColumns: {
          attributes: { include: ['password', 'verifyToken'] },
        },
      },
    },
  );
  Customer.associate = function (models) {
    // associations can be defined here
  };
  return Customer;
};
