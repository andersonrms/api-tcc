module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('products', [{
      name: 'Carderno',
      amount: 20,
      price: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Mochila',
      amount: 100,
      price: 30,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Bolsa',
      amount: 80,
      price: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Avental',
      amount: 60,
      price: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Carnê',
      amount: 1000,
      price: 8,
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  down: () => {},
};
