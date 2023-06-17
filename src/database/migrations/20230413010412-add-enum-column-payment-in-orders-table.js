module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('orders', 'payment_form', {
      type: Sequelize.ENUM('credit', 'currency', 'installment'),
      allowNull: false,
    });
  },

  async down(queryInterface) {
    return queryInterface.removeColumn('orders', 'payment_form');
  },
};
