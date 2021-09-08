

module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('Customers', 'verifyToken', {
      type: Sequelize.STRING,
      defaultValue: null,
    }),
    queryInterface.addColumn('Customers', 'isVerified', {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    }),
  ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.removeColumn('Customers', 'verifyToken'),
    queryInterface.removeColumn('Customers', 'isVerified'),
  ]),
};
