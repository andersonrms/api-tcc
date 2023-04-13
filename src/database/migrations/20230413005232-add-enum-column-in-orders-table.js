module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('orders', 'status', {
      type: Sequelize.ENUM('peding', 'production', 'ready'),
      defaultValue: 'peding',
      allowNull: false,
    });
  },

  async down(queryInterface) {
    return queryInterface.dropTable('orders');
  },
};
