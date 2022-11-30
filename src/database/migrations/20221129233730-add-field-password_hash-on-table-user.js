/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'users',
        'password_hash',
        {
          type: Sequelize.STRING,
          allowNull: false,
        },
      ),
    ]);
  },

  down(queryInterface) {
    return Promise.all([
      queryInterface.addColumn(
        'users',
        'password_hash',
      ),
    ]);
  },
};
