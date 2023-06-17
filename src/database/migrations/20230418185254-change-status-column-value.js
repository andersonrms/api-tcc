module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.changeColumn('orders', 'status', {
      type: Sequelize.ENUM('pending', 'production', 'done'),
      defaultValue: 'pending',
      allowNull: false,
    });
  },

  async down(queryInterface) {
    return queryInterface.removeColumn('orders', 'status');
  },
};
