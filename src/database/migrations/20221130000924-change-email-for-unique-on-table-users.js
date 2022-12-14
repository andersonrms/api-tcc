module.exports = {
  async up(queryInterface, Sequelize) {
    return (
      queryInterface.changeColumn(
        'users',
        'email',
        {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
      )
    );
  },

  async down() {
    /**
       * Add reverting commands here.
       *
       * Example:
       * await queryInterface.dropTable('users');
       */
  },
};
