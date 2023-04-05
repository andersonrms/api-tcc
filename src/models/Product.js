import Sequelize, { Model } from 'sequelize';

export default class Product extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'name is empty or less than 3',
          },
        },
      },
      amount: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        validate: {
          isNumeric: {
            msg: 'amount does not a number',
          },
        },
      },
      price: {
        type: Sequelize.FLOAT,
        defaultValue: null,
        validate: {
          isFloat: {
            msg: 'price does not a float',
          },
        },
      },
    }, {
      sequelize,
    });
  }
}
