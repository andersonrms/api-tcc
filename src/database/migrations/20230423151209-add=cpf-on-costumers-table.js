module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('costumers', 'cpf', {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true,
    });
  },

  async down(queryInterface) {
    return queryInterface.removeColumn('costumers', 'cpf');
  },
};
