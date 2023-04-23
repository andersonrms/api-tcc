module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.changeColumn('costumers', 'cnpj', {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true,
    });
  },

  async down(queryInterface) {
    return queryInterface.removeColumn('costumers', 'cnpj');
  },
};
