module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.changeColumn(
      'products',
      'amount',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    );
  },

  async down() {
    /* */
  },
};
